"use strict";

const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
}

const matrixCanvas = document.getElementById("matrix-42-canvas");

if (matrixCanvas) {
        const matrixContext = matrixCanvas.getContext("2d");
        const maskCanvas = document.createElement("canvas");
        const maskContext = maskCanvas.getContext("2d");

        const characters =
                "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                "{}[]<>+-=*/&%$#@!?";

        const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
        );

        let canvasWidth = 0;
        let canvasHeight = 0;
        let characterSize = 11;
        let animationFrameId = null;
        let previousFrameTime = 0;

        function createNumberMask() {
                maskCanvas.width = canvasWidth;
                maskCanvas.height = canvasHeight;

                maskContext.clearRect(
                        0,
                        0,
                        canvasWidth,
                        canvasHeight
                );

                maskContext.fillStyle = "#ffffff";
                maskContext.textAlign = "center";
                maskContext.textBaseline = "middle";

                maskContext.font =
                        `900 ${canvasHeight * 0.72}px Arial, sans-serif`;

                maskContext.fillText(
                        "42",
                        canvasWidth / 2,
                        canvasHeight / 2
                );
        }

        function resizeMatrixCanvas() {
                const canvasRectangle =
                        matrixCanvas.getBoundingClientRect();

                const pixelRatio = Math.min(
                        window.devicePixelRatio || 1,
                        2
                );

                canvasWidth = Math.max(
                        1,
                        Math.floor(canvasRectangle.width)
                );

                canvasHeight = Math.max(
                        1,
                        Math.floor(canvasRectangle.height)
                );

                matrixCanvas.width =
                        Math.floor(canvasWidth * pixelRatio);

                matrixCanvas.height =
                        Math.floor(canvasHeight * pixelRatio);

                matrixContext.setTransform(
                        pixelRatio,
                        0,
                        0,
                        pixelRatio,
                        0,
                        0
                );

                characterSize = Math.max(
                        8,
                        Math.floor(canvasWidth / 25)
                );

                createNumberMask();
                drawMatrixNumber();
        }

        function getRandomCharacter() {
                const randomIndex = Math.floor(
                        Math.random() * characters.length
                );

                return characters[randomIndex];
        }

        function isInsideNumberMask(xPosition, yPosition) {
                const pixelData = maskContext.getImageData(
                        Math.min(
                                Math.floor(xPosition),
                                canvasWidth - 1
                        ),
                        Math.min(
                                Math.floor(yPosition),
                                canvasHeight - 1
                        ),
                        1,
                        1
                ).data;

                return pixelData[3] > 100;
        }

        function drawMatrixNumber() {
                matrixContext.clearRect(
                        0,
                        0,
                        canvasWidth,
                        canvasHeight
                );

                matrixContext.textAlign = "center";
                matrixContext.textBaseline = "middle";
                matrixContext.font =
                        `700 ${characterSize}px "Courier New", monospace`;

                for (
                        let yPosition = characterSize / 2;
                        yPosition < canvasHeight;
                        yPosition += characterSize
                ) {
                        for (
                                let xPosition = characterSize / 2;
                                xPosition < canvasWidth;
                                xPosition += characterSize
                        ) {
                                if (
                                        !isInsideNumberMask(
                                                xPosition,
                                                yPosition
                                        )
                                ) {
                                        continue;
                                }

                                const randomOpacity =
                                        0.45 + Math.random() * 0.55;

                                const useBrightCharacter =
                                        Math.random() > 0.82;

                                if (useBrightCharacter) {
                                        matrixContext.fillStyle =
                                                `rgba(248, 250, 252, ${randomOpacity})`;
                                } else {
                                        matrixContext.fillStyle =
                                                `rgba(56, 189, 248, ${randomOpacity})`;
                                }

                                matrixContext.fillText(
                                        getRandomCharacter(),
                                        xPosition,
                                        yPosition
                                );
                        }
                }
        }

        function animateMatrixNumber(currentTime) {
                const frameInterval = 85;

                if (
                        currentTime - previousFrameTime >=
                        frameInterval
                ) {
                        drawMatrixNumber();
                        previousFrameTime = currentTime;
                }

                animationFrameId = window.requestAnimationFrame(
                        animateMatrixNumber
                );
        }

        function startMatrixAnimation() {
                if (animationFrameId !== null) {
                        window.cancelAnimationFrame(
                                animationFrameId
                        );
                }

                if (prefersReducedMotion.matches) {
                        drawMatrixNumber();
                        return;
                }

                animationFrameId = window.requestAnimationFrame(
                        animateMatrixNumber
                );
        }

        const matrixResizeObserver = new ResizeObserver(() => {
                resizeMatrixCanvas();
                startMatrixAnimation();
        });

        matrixResizeObserver.observe(matrixCanvas);

        prefersReducedMotion.addEventListener(
                "change",
                startMatrixAnimation
        );

        resizeMatrixCanvas();
        startMatrixAnimation();
}