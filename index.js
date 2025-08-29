let heartCount = 0;
    let copyCount = 0;
    let coinCount = 100;

    const heartCounter = document.getElementById("heartCount");
    const copyCounter = document.getElementById("copyCount");
    const coinCounter = document.getElementById("coinCount");
    const historyList = document.getElementById("historyList");

    // Heart Button (on each card)
    document.querySelectorAll(".heartBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        heartCount++;
        heartCounter.textContent = heartCount;
      });
    });

    // Copy Button
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const number = btn.getAttribute("data-number");
        navigator.clipboard.writeText(number);
        copyCount++;
        copyCounter.textContent = copyCount + " Copy";
        alert("Number copied: " + number);
      });
    });

    // Call Button
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const number = btn.getAttribute("data-number");

        if (coinCount < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        alert("Calling " + name + " (" + number + ")...");
        coinCount -= 20;
        coinCounter.textContent = coinCount;

        const li = document.createElement("li");
        const time = new Date().toLocaleTimeString();
        li.textContent = `${name} — ${number} — ${time}`;
        historyList.prepend(li);
      });
    });

    // Clear History
    document.getElementById("clearHistory").addEventListener("click", () => {
      historyList.innerHTML = "";
    });