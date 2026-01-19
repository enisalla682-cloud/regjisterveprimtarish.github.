const users = [
  { username: "mesues", password: "1234", role: "teacher" },
  { username: "koordinator", password: "1234", role: "coordinator" },
  { username: "drejtori", password: "1234", role: "director" }
];

function login(e) {
  e.preventDefault();
  const u = username.value;
  const p = password.value;

  const user = users.find(x => x.username === u && x.password === p);
  if (!user) {
    document.getElementById("error").innerText = "Username ose password gabim!";
    return;
  }

  if (user.role === "teacher") location.href = "teacher.html";
  if (user.role === "coordinator") location.href = "coordinator.html";
  if (user.role === "director") location.href = "director.html";
}

function addActivity(e) {
  e.preventDefault();
  const data = {
    activity: activity.value,
    date: date.value,
    hours: hours.value,
    absences: absences.value
  };

  let a = JSON.parse(localStorage.getItem("activities")) || [];
  a.push(data);
  localStorage.setItem("activities", JSON.stringify(a));

  alert("U ruajt!");
}

function showReport() {
  let a = JSON.parse(localStorage.getItem("activities")) || [];
  let out = "";
  a.forEach(x => {
    out += `<p>${x.activity} | ${x.date} | ${x.hours} orë | mungesa: ${x.absences}</p>`;
  });
  report.innerHTML = out;
}

window.onload = function() {
  let a = JSON.parse(localStorage.getItem("activities")) || [];
  let out = "";
  a.forEach(x => {
    out += `<p>${x.activity} - ${x.date}</p>`;
  });
  if (directorView) directorView.innerHTML = out;
}
