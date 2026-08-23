import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InvestmentIntelligenceOrb({ isTransitioning = false, onClick }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 1. Central Intelligence Particle Sphere
    const particleCount = 750;
    const sphereRadius = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = [];

    const limeColor = new THREE.Color("#F0FB43");
    const lightGreenColor = new THREE.Color("#7ED043");
    const mediumGreenColor = new THREE.Color("#4FB734");
    const deepGreenColor = new THREE.Color("#176B24");

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions.push(new THREE.Vector3(x, y, z));

      // Gradient color mapping
      const mixed = Math.random() > 0.6 ? limeColor : Math.random() > 0.3 ? lightGreenColor : mediumGreenColor;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(240, 251, 67, 1)");
    gradient.addColorStop(0.3, "rgba(126, 208, 67, 0.8)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 10,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleField = new THREE.Points(geometry, particleMaterial);
    scene.add(particleField);

    // 2. Wireframe Lattice Core Rings
    const latticeGeo = new THREE.IcosahedronGeometry(130, 2);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x4fb734,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const lattice = new THREE.Mesh(latticeGeo, latticeMat);
    scene.add(lattice);

    // Orbiting Signal Rings
    const ring1Geo = new THREE.TorusGeometry(175, 1.2, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xf0fb43, transparent: true, opacity: 0.45 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(200, 1, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x7ed043, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 3. Mouse Interactive Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((e.clientX - rect.left) - rect.width / 2) * 0.4;
      mouseY = ((e.clientY - rect.top) - rect.height / 2) * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 4. Animation Loop
    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particleField.rotation.y = time * 0.15 + targetX * 0.003;
      particleField.rotation.x = Math.sin(time * 0.2) * 0.1 + targetY * 0.003;

      lattice.rotation.y = -time * 0.08;
      lattice.rotation.x = time * 0.04;

      ring1.rotation.z = time * 0.25;
      ring1.rotation.y = Math.sin(time * 0.3) * 0.2;

      ring2.rotation.x = -time * 0.2;
      ring2.rotation.z = time * 0.1;

      // Pulsating breath wave
      const scale = 1 + Math.sin(time * 1.5) * 0.03;
      particleField.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      latticeGeo.dispose();
      latticeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      onClick={onClick}
      className={`relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center cursor-pointer transition-transform duration-700 ${
        isTransitioning ? "scale-125 opacity-0" : "scale-100 opacity-100"
      }`}
    />
  );
}
