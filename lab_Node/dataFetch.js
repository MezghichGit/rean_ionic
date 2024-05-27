async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
      return null;
    }
  }
  
  async function displayData() {
    const data =   fetchData();
    console.log("reste du programme...");
    if (data) {
      console.log('Données récupérées avec succès :', data);
    } else {
      console.log('Impossible de récupérer les données.');
    }
  }

  displayData();
