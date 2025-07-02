"use client";

import Link from 'next/link';
import { FaGraduationCap, FaHandshake, FaBlog } from 'react-icons/fa';
import SectionInfo from "@/components/SectionInfo"

export default function OptionsCards() {
  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap p-2">
      
      <Link className="text-decoration-none" href="/formation" passHref>
        <span className="card text-center text-decoration-none text-dark shadow-sm" 
           style={{ width: '220px', cursor: 'pointer', transition: 'transform 0.2s' }}
           onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
           onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div className="card-body position-relative">
              <SectionInfo message="Soumettez votre demande en formation grâce au formulaire de formation, vous aurai un e-mail de confirmation , appuyez pour consulter la page." color="secondary"/>
            <FaGraduationCap size={48} className="mb-3 text-primary" />
            <h5 className="card-title">Suivre la formation</h5>
            <p className="card-text text-muted">
              Découvre nos cours pour booster tes compétences.
            </p>
          </div>
        </span>
      </Link>

      <Link className="text-decoration-none" href="/partenariat" passHref>
        <span className="card text-center text-decoration-none text-dark shadow-sm"
           style={{ width: '220px', cursor: 'pointer', transition: 'transform 0.2s' }}
           onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
           onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div className="card-body position-relative">
              <SectionInfo message="Ici, consulter nos partenaires et candidatez à base du formulaire(réservé uniquement aux entreprises) pour être parmis nos partenaires fiable, appuyez pour consulter la page." color="danger"/>
            <FaHandshake size={48} className="mb-3 text-success" />
                
            <h5 className="card-title">Partenariat</h5>
            <p className="card-text text-muted">
              Collabore avec nous pour grandir ensemble.
            </p>
          </div>
        </span>
      </Link>

      <Link className="text-decoration-none" href="/blog" passHref>
        <span className="card text-center text-decoration-none text-dark shadow-sm"
           style={{ width: '220px', cursor: 'pointer', transition: 'transform 0.2s' }}
           onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
           onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div className="card-body position-relative">
              <SectionInfo message="Ici, s'affiche nos dernières actualités et opportunités, appuyez pour consulter la page." color="info"/>
            
            <FaBlog size={48} className="mb-3 text-info" />
            
            <h5 className="card-title">Blog</h5>
            <p className="card-text text-muted">
              Lis nos dernières actualités et astuces.
            </p>
          </div>
        </span>
      </Link>

    </div>
  );
}
