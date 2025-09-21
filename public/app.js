document.addEventListener('DOMContentLoaded', () => {
            const bubblesContainer = document.createElement('div');
            bubblesContainer.classList.add('bubbles-container');
            document.body.appendChild(bubblesContainer);

            function createBubble() {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                const size = Math.random() * 60 + 20; // Size between 20px and 80px
                const left = Math.random() * 100; // Position anywhere across the width
                const duration = Math.random() * 8 + 5; // Duration between 5s and 13s

                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${left}%`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.animationDelay = `-${Math.random() * 5}s`; // Start at a random point in the animation cycle

                bubblesContainer.appendChild(bubble);

                // Remove bubble when it's off-screen
                setTimeout(() => {
                    bubble.remove();
                }, duration * 1000);
            }

            setInterval(createBubble, 500); // Create a new bubble every 500ms
        });