  const fetchCustomizations = async () => {
    const customizations = await fetch(
      "https://juice-api.irrvlo.xyz/api/customizations"
    ).then((res) => res.json());

    localStorage.setItem(
      "juice-customizations",
      JSON.stringify(customizations)
    );
  };
  fetchCustomizations();

  const fetchCurrentUser = async () => {
    const user = await fetch("https://api.kirka.io/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
