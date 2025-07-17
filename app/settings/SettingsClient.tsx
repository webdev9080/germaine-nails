'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserButton, SignInButton } from '@clerk/nextjs';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import { Card, CardBody } from 'react-bootstrap';
import { FiUser, FiMoon, FiGlobe } from 'react-icons/fi';

interface UserData {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: string;
}

export default function SettingsClient() {
  const { t } = useTranslation('common');
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null); // Utilisateur non connecté
        }
      } catch (error) {
        console.error('Erreur récupération utilisateur', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">{t('settingsTitle')}</h2>

      <div className="row g-4">
        {/* ✅ Profil */}
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiUser className="me-2" /> {t('profileTitle')}</h5>
                {loading ? (
                  <p className="mb-0 text-muted">{t('loading')}</p>
                ) : user ? (
                  <>
                    <p className="mb-0 text-muted">
                      {t('profileDescription')} <br />
                      <strong>{t('role')}: {user.role}</strong>
                    </p>
                  </>
                ) : (
                  <p className="mb-0 text-muted">{t('notLoggedIn')}</p>
                )}
              </div>

              {loading ? null : user ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal">
                  <button className="btn btn-primary">{t('signIn')}</button>
                </SignInButton>
              )}
            </CardBody>
          </Card>
        </div>

        {/* ✅ Dark mode */}
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiMoon className="me-2" /> {t('darkModeTitle')}</h5>
                <p className="mb-0 text-muted">{t('darkModeDescription')}</p>
              </div>
              <ThemeToggle />
            </CardBody>
          </Card>
        </div>

        {/* ✅ Language */}
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiGlobe className="me-2" /> {t('languageTitle')}</h5>
                <p className="mb-0 text-muted">{t('languageDescription')}</p>
              </div>
              <LanguageSelector />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}