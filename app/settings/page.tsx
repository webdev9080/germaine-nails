"use client"

import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageSelector } from "@/components/LanguageSelector"
import { Card, CardBody } from "react-bootstrap"
import { FiUser, FiMoon, FiGlobe } from "react-icons/fi"

export default function SettingsPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Paramètres du compte</h2>

      <div className="row g-4">
        {/* Profile / Clerk */}
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiUser className="me-2" /> Profil utilisateur</h5>
                <p className="mb-0 text-muted">Gérez votre compte et votre déconnexion.</p>
              </div>
              <UserButton afterSignOutUrl="/" />
            </CardBody>
          </Card>
        </div>

        {/* Dark / Light mode */}
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiMoon className="me-2" /> Mode Sombre</h5>
                <p className="mb-0 text-muted">Activez le mode sombre ou clair.</p>
              </div>
              <ThemeToggle />
            </CardBody>
          </Card>
        </div>

        {/* Langue */}
        <div className="col-12 col-md-6">
          <Card className="shadow-sm">
            <CardBody className="d-flex align-items-center justify-content-between">
              <div>
                <h5><FiGlobe className="me-2" /> Langue</h5>
                <p className="mb-0 text-muted">Choisissez votre langue préférée.</p>
              </div>
              <LanguageSelector />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}