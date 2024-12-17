function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo');
  if (photo) {
    photo.src = profileData.photo;
    photo.alt = profileData.name;
  } else {
    console.error('Elemento photo não encontrado');
  }

  const name = document.getElementById('profile.name');
  if (name) {
    name.innerText = profileData.name;
  } else {
    console.error('Elemento name não encontrado');
  }

  const job = document.getElementById('profile.job');
  if (job) {
    job.innerText = profileData.job;
  } else {
    console.error('Elemento job não encontrado');
  }

  const location = document.getElementById('profile.location');
  if (location) {
    location.innerText = profileData.location;
  } else {
    console.error('Elemento location não encontrado');
  }

  const phone = document.getElementById('profile.phone');
  if (phone) {
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;
  } else {
    console.error('Elemento phone não encontrado');
  }

  const email = document.getElementById('profile.email');
  if (email) {
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
  } else {
    console.error('Elemento email não encontrado');
  }
}

(async () => {
  const profileData = await fetchProfileData();
  if (profileData) {
    updateProfileInfo(profileData);
  } else {
    console.error('Failed to fetch profile data');
  }
})();
