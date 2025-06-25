// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light p-4">
      <img
        src="https://undraw.co/api/illustrations/27e0e067-9640-4ac1-a6d3-dcae88001ccf" // Tu peux remplacer cette image
        alt="Page non trouvée"
        className="img-fluid mb-4"
        style={{ maxWidth: '400px' }}
      />
      <h1 className="display-4 fw-bold mb-3">404 - Page non trouvée</h1>
      <p className="lead mb-4">
        Oups ! La page que vous recherchez semble introuvable.
      </p>
      <Link href="/" passHref>
        <span className="btn btn-primary px-4 py-2">Retour à l’accueil</span>
      </Link>
    </div>
  );
}
