'use client';

import React, { useState, useEffect } from 'react';

const AdvancedLoadingSpinner = () => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingStages = [
    'Initializing Dashboard...',
    'Loading Analytics Data...',
    'Preparing Charts...',
    'Setting up User Interface...',
    'Finalizing Dashboard...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stageInterval = setInterval(() => {
      setLoadingStage(prev => {
        if (prev >= loadingStages.length - 1) {
          clearInterval(stageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(stageInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-sm">BP</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">BNP Paribas</h1>
        </div>

        {/* Loading Animation */}
        <div className="loader-container mb-8">
          <div className="loader">
            <div className="box box0">
              <div />
            </div>
            <div className="box box1">
              <div />
            </div>
            <div className="box box2">
              <div />
            </div>
            <div className="box box3">
              <div />
            </div>
            <div className="box box4">
              <div />
            </div>
            <div className="box box5">
              <div />
            </div>
            <div className="box box6">
              <div />
            </div>
            <div className="box box7">
              <div />
            </div>
            <div className="ground">
              <div />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-200 text-sm">Loading Progress</span>
            <span className="text-emerald-200 text-sm">{progress}%</span>
          </div>
          <div className="w-full bg-emerald-800 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Stage */}
        <div className="text-center">
          <p className="text-emerald-200 text-sm mb-2">
            {loadingStages[loadingStage]}
          </p>
          <div className="flex justify-center space-x-1">
            {loadingStages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index <= loadingStage ? 'bg-emerald-500' : 'bg-emerald-700'
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .loader-container {
            display: flex;
            justify-content: center;
          }

          .loader {
            --duration: 3s;
            --primary: #059669;
            --primary-light: #001b18;
            --primary-rgba: rgba(5, 150, 105, 0);
            width: 200px;
            height: 320px;
            position: relative;
            transform-style: preserve-3d;
          }

          @media (max-width: 480px) {
            .loader {
              zoom: 0.44;
            }
          }

          .loader:before,
          .loader:after {
            --r: 20.5deg;
            content: "";
            width: 320px;
            height: 140px;
            position: absolute;
            right: 32%;
            bottom: -11px;
            background: #e8e8e8;
            transform: translateZ(200px) rotate(var(--r));
            animation: mask var(--duration) linear forwards infinite;
          }

          .loader:after {
            --r: -20.5deg;
            right: auto;
            left: 32%;
          }

          .loader .ground {
            position: absolute;
            left: -50px;
            bottom: -120px;
            transform-style: preserve-3d;
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
          }

          .loader .ground div {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
              translateZ(100px) scale(0);
            width: 200px;
            height: 200px;
            background: var(--primary);
            background: linear-gradient(
              45deg,
              var(--primary) 0%,
              var(--primary) 50%,
              var(--primary-light) 50%,
              var(--primary-light) 100%
            );
            transform-style: preserve-3d;
            animation: ground var(--duration) linear forwards infinite;
          }

          .loader .ground div:before,
          .loader .ground div:after {
            --rx: 90deg;
            --ry: 0deg;
            --x: 44px;
            --y: 162px;
            --z: -50px;
            content: "";
            width: 156px;
            height: 300px;
            opacity: 0;
            background: linear-gradient(var(--primary), var(--primary-rgba));
            position: absolute;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y))
              translateZ(var(--z));
            animation: ground-shine var(--duration) linear forwards infinite;
          }

          .loader .ground div:after {
            --rx: 90deg;
            --ry: 90deg;
            --x: 0;
            --y: 177px;
            --z: 150px;
          }

          .loader .box {
            --x: 0;
            --y: 0;
            position: absolute;
            animation: var(--duration) linear forwards infinite;
            transform: translate(var(--x), var(--y));
          }

          .loader .box div {
            background-color: var(--primary);
            width: 48px;
            height: 48px;
            position: relative;
            transform-style: preserve-3d;
            animation: var(--duration) ease forwards infinite;
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
          }

          .loader .box div:before,
          .loader .box div:after {
            --rx: 90deg;
            --ry: 0deg;
            --z: 24px;
            --y: -24px;
            --x: 0;
            content: "";
            position: absolute;
            background-color: inherit;
            width: inherit;
            height: inherit;
            transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y))
              translateZ(var(--z));
            filter: brightness(var(--b, 1.2));
          }

          .loader .box div:after {
            --rx: 0deg;
            --ry: 90deg;
            --x: 24px;
            --y: 0;
            --b: 1.4;
          }

          .loader .box.box0 {
            --x: -220px;
            --y: -120px;
            left: 58px;
            top: 108px;
          }

          .loader .box.box1 {
            --x: -260px;
            --y: 120px;
            left: 25px;
            top: 120px;
          }

          .loader .box.box2 {
            --x: 120px;
            --y: -190px;
            left: 58px;
            top: 64px;
          }

          .loader .box.box3 {
            --x: 280px;
            --y: -40px;
            left: 91px;
            top: 120px;
          }

          .loader .box.box4 {
            --x: 60px;
            --y: 200px;
            left: 58px;
            top: 132px;
          }

          .loader .box.box5 {
            --x: -220px;
            --y: -120px;
            left: 25px;
            top: 76px;
          }

          .loader .box.box6 {
            --x: -260px;
            --y: 120px;
            left: 91px;
            top: 76px;
          }

          .loader .box.box7 {
            --x: -240px;
            --y: 200px;
            left: 58px;
            top: 87px;
          }

          .loader .box0 {
            animation-name: box-move0;
          }

          .loader .box0 div {
            animation-name: box-scale0;
          }

          .loader .box1 {
            animation-name: box-move1;
          }

          .loader .box1 div {
            animation-name: box-scale1;
          }

          .loader .box2 {
            animation-name: box-move2;
          }

          .loader .box2 div {
            animation-name: box-scale2;
          }

          .loader .box3 {
            animation-name: box-move3;
          }

          .loader .box3 div {
            animation-name: box-scale3;
          }

          .loader .box4 {
            animation-name: box-move4;
          }

          .loader .box4 div {
            animation-name: box-scale4;
          }

          .loader .box5 {
            animation-name: box-move5;
          }

          .loader .box5 div {
            animation-name: box-scale5;
          }

          .loader .box6 {
            animation-name: box-move6;
          }

          .loader .box6 div {
            animation-name: box-scale6;
          }

          .loader .box7 {
            animation-name: box-move7;
          }

          .loader .box7 div {
            animation-name: box-scale7;
          }

          @keyframes box-move0 {
            12% {
              transform: translate(var(--x), var(--y));
            }
            25%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale0 {
            6% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            14%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move1 {
            16% {
              transform: translate(var(--x), var(--y));
            }
            29%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale1 {
            10% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            18%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move2 {
            20% {
              transform: translate(var(--x), var(--y));
            }
            33%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale2 {
            14% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            22%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move3 {
            24% {
              transform: translate(var(--x), var(--y));
            }
            37%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale3 {
            18% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            26%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move4 {
            28% {
              transform: translate(var(--x), var(--y));
            }
            41%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale4 {
            22% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            30%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move5 {
            32% {
              transform: translate(var(--x), var(--y));
            }
            45%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale5 {
            26% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            34%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move6 {
            36% {
              transform: translate(var(--x), var(--y));
            }
            49%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale6 {
            30% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            38%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes box-move7 {
            40% {
              transform: translate(var(--x), var(--y));
            }
            53%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }

          @keyframes box-scale7 {
            34% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            42%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }

          @keyframes ground {
            0%, 65% {
              transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
                translateZ(100px) scale(0);
            }
            75%, 90% {
              transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
                translateZ(100px) scale(1);
            }
            100% {
              transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
                translateZ(100px) scale(0);
            }
          }

          @keyframes ground-shine {
            0%, 70% {
              opacity: 0;
            }
            75%, 87% {
              opacity: 0.2;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes mask {
            0%, 65% {
              opacity: 0;
            }
            66%, 100% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AdvancedLoadingSpinner;
