export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (/android/i.test(userAgent)) {
    res.writeHead(302, {
      Location: 'https://play.google.com/store/apps/details?id=au.com.liquorbarons.app',
    });
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    res.writeHead(302, {
      Location: 'https://apps.apple.com/us/app/liquor-barons-locals-club/id1496707969',
    });
  } else {
    res.writeHead(302, {
      Location: 'https://www.liquorbarons.com.au/barons-locals/',
    });
  }

  res.end();
}
