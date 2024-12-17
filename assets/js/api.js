async function fetchProfileData() {
  const url =
    'https://raw.githubusercontent.com/julianakcm1/portfolio/master/data/profile.json';
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const profileData = await response.json();
  return profileData;
}
