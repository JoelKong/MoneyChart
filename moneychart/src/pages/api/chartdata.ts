async function handler(req: any, res: any) {
  const { clientId, partyId, accessToken } = await req.body;
  const fetchDataParams: any = {
    method: "GET",
    headers: {
      'clientId': clientId,
      'accessToken': accessToken,
      'accept': "application/json",
    },
  };

  const fetchData = await fetch(
    `https://www.dbs.com/sandbox/api/sg/v1/transactions/monthlyTotals/${partyId}`,
    fetchDataParams
  );
  const monthlyDebitAndCredit = await fetchData.json();
  console.log(monthlyDebitAndCredit);
  res.status(200).json({
    monthlyDebitAndCredit,
  });
  res.status(200).json({ accessToken });
}

export default handler;
