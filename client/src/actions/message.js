export const sendMessage = async (payload) => {
  const body = JSON.stringify(payload);
  const headers = {
    'Content-Type': 'application/json'
  }
  const res = await fetch('/api/message/send', { method: 'POST', body, headers });

  return res.status === 201;
};
