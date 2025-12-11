export const api = {
  list: () =>
    fetch(`${ITNewsConfig.rest_url}/list`).then(r => r.json()),

  create: (data: any) =>
    fetch(`${ITNewsConfig.rest_url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": ITNewsConfig.nonce
      },
      body: JSON.stringify(data)
    }).then(r => r.json()),

  delete: (id: number) =>
    fetch(`${ITNewsConfig.rest_url}/delete/${id}`, {
      method: "DELETE",
      headers: { "X-WP-Nonce": ITNewsConfig.nonce }
    }).then(r => r.json())
};
