import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveWebGLBackground({ agentState = "idle" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Three Scene, Camera & Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06090f, 0.0018);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
    camera.position.z = 800;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x06090f, 1);
    containerRef.current.appendChild(renderer.domElement);

    // 2. Geometry - High Tech Fluid Constellation
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorIdle1 = new THREE.Color("#10b981"); // Emerald
    const colorIdle2 = new THREE.Color("#06b6d4"); // Cyan
    const colorActive = new THREE.Color("#6366f1"); // Indigo
    const colorAlert = new THREE.Color("#f59e0b"); // Amber

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 2200;
      const y = (Math.random() - 0.5) * 1600;
      const z = (Math.random() - 0.5) * 1800;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixedColor = colorIdle1.clone().lerp(colorIdle2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 4 + 1;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Particle Material
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(16, 185, 129, 0.8)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 18,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Connective Wireframe Torus / Wave Rings
    const ringGeo = new THREE.TorusGeometry(380, 2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // 4. Mouse Interactive Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.6;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 5. Animation Loop
    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 0.4;
      camera.position.y = -targetY * 0.4;
      camera.lookAt(scene.position);

      // Rotate particles based on agentState
      const speedMultiplier = agentState === "crawling" ? 2.5 : agentState === "checkpoint" ? 0.3 : 1.0;
      particles.rotation.y = elapsedTime * 0.04 * speedMultiplier;
      particles.rotation.x = elapsedTime * 0.02 * speedMultiplier;

      ring.rotation.z = elapsedTime * 0.08 * speedMultiplier;
      ring.rotation.y = Math.sin(elapsedTime * 0.3) * 0.2;

      // Color shifts based on state
      if (agentState === "crawling") {
        ringMat.color.setHex(0x06b6d4); // Cyan
        material.opacity = 0.9;
      } else if (agentState === "checkpoint") {
        ringMat.color.setHex(0xf59e0b); // Amber
        material.opacity = 0.8;
      } else if (agentState === "completed") {
        ringMat.color.setHex(0x10b981); // Emerald
        material.opacity = 0.85;
      } else {
        ringMat.color.setHex(0x3b82f6); // Blue
        material.opacity = 0.65;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [agentState]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80 transition-opacity duration-1000"
    />
  );
}
