export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (/android/i.test(userAgent)) {
    // Android
    res.writeHead(302, {
      Location: 'https://play.google.com/store/apps/details?id=au.com.liquorbarons.app',
    });
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    // iOS
    res.writeHead(302, {
      Location: 'https://apps.apple.com/us/app/liquor-barons-locals-club/id1496707969',
    });
  } else {
    // Desktop or unknown
    res.writeHead(302, {
      Location: 'https://www.liquorbarons.com.au/barons-locals/', // or a landing page
    });
  }

  res.end();
}
