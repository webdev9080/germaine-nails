"use client";

import { useTranslation } from "react-i18next";
import { UserButton } from "@clerk/nextjs";
import {ThemeToggle} from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Card, CardBody } from "react-bootstrap";
import { FiUser, FiMoon, FiGlobe } from "react-icons/fi";

export default function SettingsPage() {
  const { t } = useTranslation("common");

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">{t("settingsTitle")}</h2>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiUser className="me-2" /> {t("profileTitle")}</h5>
                <p className="mb-0 text-muted">{t("profileDescription")}</p>
              </div>
              <UserButton afterSignOutUrl="/" />
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiMoon className="me-2" /> {t("darkModeTitle")}</h5>
                <p className="mb-0 text-muted">{t("darkModeDescription")}</p>
              </div>
              <ThemeToggle />
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiGlobe className="me-2" /> {t("languageTitle")}</h5>
                <p className="mb-0 text-muted">{t("languageDescription")}</p>
              </div>
              <LanguageSelector />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}