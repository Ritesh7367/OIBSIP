// Update time display
const timeElement = document.querySelector(".time");

function updateTime() {
    const now = new Date();
    timeElement.innerHTML = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

updateTime();
setInterval(updateTime, 1000);

// Smooth scroll for nav links
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});
