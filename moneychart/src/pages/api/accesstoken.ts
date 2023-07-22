async function handler(req: any, res: any) {
  const { query } = req;
  const code = query.code;
  const sandboxClientID = "c871240c-d971-4b74-9b13-4be5b3a27bd1";
  const sandboxClientSecret = "62813690-4c56-4e4c-8634-3f232edf516c";
  const authCode = btoa(`${sandboxClientID}:${sandboxClientSecret}`); //https://www.dbs.com/developers/#/all-products/play-ground
  let redirectURI = "http://localhost:3000/api/accesstoken";

  let fetchToken = {
    method: "POST",
    body: `code=${code}&grant_type=authorization_code&redirect_uri=${redirectURI}`,
    headers: {
      authorization: `Basic ${authCode}`,
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      accept: "application/json",
    },
  };
  let response = await fetch(
    "https://www.dbs.com/sandbox/api/sg/v1/oauth/tokens",
    fetchToken
  );

  let parsed = await response.json();
  res.redirect(
    `http://localhost:3000/dashboard?access_token=${parsed.access_token}`
  );
}

export default handler;
