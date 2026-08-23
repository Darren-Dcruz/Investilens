import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Cpu, Zap, Activity } from "lucide-react";

export default function HolographicLensCore({ agentState = "idle", currentStageId = 1 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 120;
    const height = 100;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Inner glowing icosahedron core
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Outer orbital ring
    const ringGeo = new THREE.TorusGeometry(1.1, 0.02, 16, 50);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      const speed = agentState === "crawling" ? 3.0 : agentState === "checkpoint" ? 0.4 : 1.0;

      core.rotation.y = time * 0.8 * speed;
      core.rotation.x = time * 0.4 * speed;

      ring.rotation.z = -time * 1.2 * speed;
      ring.rotation.y = Math.sin(time) * 0.4;

      // Color reactivity
      if (agentState === "crawling") {
        coreMat.color.setHex(0x06b6d4); // Cyan
        ringMat.color.setHex(0x6366f1); // Indigo
      } else if (agentState === "checkpoint") {
        coreMat.color.setHex(0xf59e0b); // Amber
        ringMat.color.setHex(0xf59e0b);
      } else if (agentState === "completed") {
        coreMat.color.setHex(0x10b981); // Emerald
        ringMat.color.setHex(0x10b981);
      } else {
        coreMat.color.setHex(0x10b981);
        ringMat.color.setHex(0x06b6d4);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [agentState]);

  return (
    <div className="relative flex items-center justify-between bg-gradient-to-r from-[#070d1a] to-[#0a1428] border border-cyan-500/20 rounded-xl p-3 overflow-hidden shadow-lg shadow-cyan-500/5">
      {/* 3D Holographic Sphere Canvas */}
      <div className="flex items-center gap-3">
        <div ref={mountRef} className="w-20 h-16 flex-shrink-0 flex items-center justify-center" />
        <div className="flex flex-col gap-0.5 font-mono">
          <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>INVESTILENS HOLOGRAPHIC CORE</span>
          </div>
          <span className="text-xs font-bold text-white tracking-wide">
            {agentState === "crawling" ? "Webcmd Quantum Stream Active" : agentState === "checkpoint" ? "Human Checkpoint Locked" : agentState === "completed" ? "Deterministic Synthesis Complete" : "Autonomous Reasoning Ready"}
          </span>
          <span className="text-[10px] text-slate-400">
            Telemetry: 60 FPS • Sub-10ms Inference • Memory: 142MB
          </span>
        </div>
      </div>

      <div className="hidden sm:flex flex-col items-end gap-1 font-mono text-[10px] text-slate-400">
        <div className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
          STAGE {currentStageId}/16
        </div>
        <span>Hermes Orchestrator</span>
      </div>
    </div>
  );
}
