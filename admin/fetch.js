const env = "http://localhost:3333";

async function fetchAndProcessServices() {
  try {
    const response = await fetch(`${env}/services`);
    const data = await response.json();

    const tableBody = document.getElementById("servicesTableBody");

    tableBody.innerHTML = "";

    data?.data?.forEach((item) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = item.description;
      row.appendChild(descriptionCell);

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "mr-2");
      editButton.addEventListener("click", () => {
        console.log(item);
      });
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", async () => {
        const deleteUrl = `${env}/service/delete/${item.id}`;
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: "DELETE",
          });

          if (deleteResponse.ok) {
            row.remove();
          } else {
            console.error("Delete failed:", deleteResponse.statusText);
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessExperiences() {
  try {
    const response = await fetch(`${env}/experiences`);
    const data = await response.json();

    const tableBody = document.getElementById("experiencesTableBody");

    tableBody.innerHTML = "";

    data?.data?.forEach((item) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const startDateCell = document.createElement("td");
      startDateCell.textContent = formatDate(item.startDate);
      row.appendChild(startDateCell);

      const endDateCell = document.createElement("td");
      endDateCell.textContent = formatDate(item.endDate);
      row.appendChild(endDateCell);

      const positionCell = document.createElement("td");
      positionCell.textContent = item.position;
      row.appendChild(positionCell);

      const imageUrlCell = document.createElement("td");
      imageUrlCell.textContent = truncateText(item.imageUrl, 20);
      row.appendChild(imageUrlCell);

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "mr-2");
      editButton.addEventListener("click", () => {
        console.log(item);
      });
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", async () => {
        const deleteUrl = `${env}/experience/delete/${item.id}`;
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: "DELETE",
          });

          if (deleteResponse.ok) {
            row.remove();
          } else {
            console.error("Delete failed:", deleteResponse.statusText);
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessSkills() {
  try {
    const response = await fetch(`${env}/skills`);
    const data = await response.json();

    const tableBody = document.getElementById("skillsTableBody");

    tableBody.innerHTML = "";

    data?.data?.forEach((item) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const percentCell = document.createElement("td");
      percentCell.textContent = item.percent;
      row.appendChild(percentCell);

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "mr-2");
      editButton.addEventListener("click", () => {
        console.log(item);
      });
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", async () => {
        const deleteUrl = `${env}/skill/delete/${item.id}`;
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: "DELETE",
          });

          if (deleteResponse.ok) {
            row.remove();
          } else {
            console.error("Delete failed:", deleteResponse.statusText);
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessPortfolios() {
  try {
    const response = await fetch(`${env}/portfolios`);
    const data = await response.json();

    const tableBody = document.getElementById("portfoliosTableBody");

    tableBody.innerHTML = "";

    data?.data?.forEach((item) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = item.description;
      row.appendChild(descriptionCell);

      const imageUrlCell = document.createElement("td");
      imageUrlCell.textContent = truncateText(item.imageUrl, 20);
      row.appendChild(imageUrlCell);

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit"
      editButton.classList.add("btn", "btn-primary", "mr-2");
      editButton.addEventListener("click", () => {
        console.log(item);
      });
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", async () => {
        const deleteUrl = `${env}/portfolio/delete/${item.id}`;
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: "DELETE",
          });

          if (deleteResponse.ok) {
            row.remove();
          } else {
            console.error("Delete failed:", deleteResponse.statusText);
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessSettings() {
  try {
    const response = await fetch(`${env}/settings`);
    const data = await response.json();
    const item = data?.data?.[0];

    const tableBody = document.getElementById("settingsTableBody");

    tableBody.innerHTML = "";

    if (item) {
      const row = document.createElement("tr");

      const emailCell = document.createElement("td");
      emailCell.textContent = item.email;
      row.appendChild(emailCell);

      const facebookCell = document.createElement("td");
      facebookCell.textContent = truncateText(item.facebookLink, 20);
      row.appendChild(facebookCell);

      const linkedinCell = document.createElement("td");
      linkedinCell.textContent = truncateText(item.linkedinLink, 20);
      row.appendChild(linkedinCell);

      const githubCell = document.createElement("td");
      githubCell.textContent = truncateText(item.githubLink, 20);
      row.appendChild(githubCell);

      const twitterCell = document.createElement("td");
      twitterCell.textContent = item.twitterLink;
      row.appendChild(twitterCell);

      const aboutTextCell = document.createElement("td");
      aboutTextCell.textContent = truncateText(item.aboutText, 50);
      row.appendChild(aboutTextCell);

      const skillsTextCell = document.createElement("td");
      skillsTextCell.textContent = truncateText(item.skillsText, 50);
      row.appendChild(skillsTextCell);

      const clientCountCell = document.createElement("td");
      clientCountCell.textContent = item.clientCount;
      row.appendChild(clientCountCell);

      const projectCountCell = document.createElement("td");
      projectCountCell.textContent = item.projectCount;
      row.appendChild(projectCountCell);

      const lisenceCountCell = document.createElement("td");
      lisenceCountCell.textContent = item.lisenceCount;
      row.appendChild(lisenceCountCell);

      const experienceYearCell = document.createElement("td");
      experienceYearCell.textContent = item.experienceYear;
      row.appendChild(experienceYearCell);

      const phoneNumberCell = document.createElement("td");
      phoneNumberCell.textContent = item.phoneNumber;
      row.appendChild(phoneNumberCell);

      const addressCell = document.createElement("td");
      addressCell.textContent = item.addressText;
      row.appendChild(addressCell);

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "mr-2");
      editButton.addEventListener("click", () => {
        console.log(item);
      });
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", async () => {
        const deleteUrl = `${env}/setting/delete/${item.id}`;
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: "DELETE",
          });

          if (deleteResponse.ok) {
            row.remove();
          } else {
            console.error("Delete failed:", deleteResponse.statusText);
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessMessages() {
  try {
    const response = await fetch(`${env}/messages`);
    const data = await response.json();

    const tableBody = document.getElementById("messagesTableBody");

    tableBody.innerHTML = "";

    data?.data?.forEach((item) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = item.email;
      row.appendChild(emailCell);

      const subjectCell = document.createElement("td");
      subjectCell.textContent = item.subject;
      row.appendChild(subjectCell);

      const messageCell = document.createElement("td");
      messageCell.textContent = item.message;
      row.appendChild(messageCell);

      const actionsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "mr-2");
      editButton.addEventListener("click", () => {
        console.log(item);
      });
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", async () => {
        const deleteUrl = `${env}/message/delete/${item.id}`;
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: "DELETE",
          });

          if (deleteResponse.ok) {
            row.remove();
          } else {
            console.error("Delete failed:", deleteResponse.statusText);
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}


fetchAndProcessSettings();
fetchAndProcessSkills();
fetchAndProcessServices();
fetchAndProcessPortfolios();
fetchAndProcessExperiences();
fetchAndProcessMessages();