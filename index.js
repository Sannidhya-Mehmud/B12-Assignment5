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
    li.classList.add("flex", "justify-between", "items-start","pb-1");

    // Left div for name & number
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("flex", "flex-col");

    const nameLine = document.createElement("span");
    nameLine.textContent = name;
    nameLine.classList.add("font-semibold");

    const numberLine = document.createElement("span");
    numberLine.textContent = number;
    numberLine.classList.add("text-gray-600", "text-sm");

    leftDiv.appendChild(nameLine);
    leftDiv.appendChild(numberLine);

    // Right div for time
    const rightSpan = document.createElement("span");
    rightSpan.textContent = new Date().toLocaleTimeString();
    rightSpan.classList.add("text-gray-500", "text-sm");

    li.appendChild(leftDiv);
    li.appendChild(rightSpan);
        historyList.appendChild(li);
      });
    });

    // Clear History
    document.getElementById("clearHistory").addEventListener("click", () => {
      historyList.innerHTML = "";
    });