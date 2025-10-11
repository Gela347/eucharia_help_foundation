// script.js — corrected and safe
document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Safe smooth scroll (only for internal # links that actually exist) ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  /* ---------------- SUPPORT US PAGE ---------------- */
  const supportForm = document.getElementById("supportForm");
  const supportSuccess = document.getElementById("supportSuccess");
  if (supportForm) {
    supportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      supportForm.reset();
      if (supportSuccess) supportSuccess.style.display = "block";
    });
  }

  /* ---------------- PARTNER WITH US PAGE ---------------- */
  const partnerForm = document.getElementById("partnerForm");
  const partnerSuccess = document.getElementById("partnerSuccess");
  if (partnerForm) {
    partnerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      partnerForm.reset();
      if (partnerSuccess) partnerSuccess.style.display = "block";
    });
  }

  /* ---------------- MAKE A DONATION PAGE ---------------- */
  // main donation elements (IDs must match your HTML)
  const donateForm = document.getElementById("donateForm");
  const bankDetails = document.getElementById("bankDetails");
  const confirmation = document.getElementById("confirmation");

  if (donateForm) {
    donateForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page reload

      // optional: show a friendly confirmation message
      if (confirmation) {
        const nameInput = document.getElementById("name");
        const amountInput = document.getElementById("amount");
        const name = nameInput ? nameInput.value || "Donor" : "Donor";
        const amount = amountInput ? amountInput.value || "" : "";
        confirmation.textContent = amount
          ? `Thank you, ${name}! Please proceed with your donation of $${amount} using one of the accounts below.`
          : `Thank you! Please proceed with your donation using one of the accounts below.`;
        // make sure it is visible
        confirmation.style.display = "block";
        confirmation.classList.add("show");
      }

      // hide form and reveal bank details (if present)
      donateForm.classList.add("hidden");
      if (bankDetails) {
        bankDetails.classList.remove("hidden");
        // nice UX: scroll to the revealed bank details
        bankDetails.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* ---------------- Optional donation finish popup (only attach if elements exist) ---------------- */
  const finishDonation = document.getElementById("finishDonation");
  const donationPopup = document.getElementById("donationPopup");
  const closePopup = document.getElementById("closePopup");

  if (finishDonation && donationPopup) {
    finishDonation.addEventListener("click", () => {
      // show popup (modal)
      donationPopup.style.display = "flex"; // assumes modal uses flex to center content
    });
  }

  if (closePopup && donationPopup) {
    closePopup.addEventListener("click", () => {
      donationPopup.style.display = "none";
      // optional: redirect after closing popup
      // window.location.href = "index.html";
    });
  }
});
