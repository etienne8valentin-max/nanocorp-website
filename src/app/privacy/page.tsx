"use client";

import { useState } from "react";
import Link from "next/link";

const content = {
  fr: {
    lang: "FR",
    other: "EN",
    title: "Politique de Confidentialité",
    subtitle: "TravelGuide AI — Version du [DATE À COMPLÉTER]",
    back: "← Retour au site",
    note: "Document rédigé conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés. Ton accessible recommandé par la CNIL.",
    sections: [
      {
        id: "art1",
        title: "1. Identité du Responsable de Traitement",
        body: `Le service TravelGuide AI est édité par :

- **Nom / Raison sociale :** [NOM PRÉNOM OU RAISON SOCIALE]
- **Statut juridique :** Auto-entrepreneur
- **SIRET :** [NUMÉRO SIRET]
- **Adresse :** [ADRESSE COMPLÈTE], France
- **Email de contact :** [EMAIL DE CONTACT]
- **Site web :** https://spiregg.nanocorp.app

En tant qu'auto-entrepreneur, le responsable de traitement n'est pas soumis à l'obligation de désigner un Délégué à la Protection des Données (DPO). Pour toute question relative à la protection de vos données personnelles, vous pouvez écrire directement à [EMAIL DE CONTACT].`,
      },
      {
        id: "art2",
        title: "2. Données Collectées",
        body: `TravelGuide AI collecte uniquement les données strictement nécessaires au fonctionnement du service :

**Identification**
- Donnée : Adresse email
- Justification : Création du compte, livraison du guide, communication

**Authentification**
- Donnée : Mot de passe (hashé et salé — jamais stocké en clair)
- Justification : Sécurisation de l'accès au compte

**Personnalisation du guide**
- Données : Destination(s), dates de voyage, budget, style de voyage (culturel, aventure, détente…), contraintes (accessibilité, régimes alimentaires, préférences d'hébergement…)
- Justification : Génération personnalisée du guide de voyage

**Historique des commandes**
- Données : Références de commande, montant, date
- Justification : Suivi du service, facturation, obligations comptables légales

**Données techniques**
- Données : Adresse IP, pages visitées, durée de session (outil analytique)
- Justification : Sécurité, amélioration du service, statistiques agrégées

**Données NON collectées par TravelGuide AI :** numéro de carte bancaire, CVV, IBAN (traités exclusivement par Stripe — voir Art. 7). Aucune donnée sensible au sens de l'Art. 9 RGPD.`,
      },
      {
        id: "art3",
        title: "3. Base Légale des Traitements",
        body: `Chaque traitement repose sur une base légale identifiée conformément à l'Art. 6 du RGPD :

**Gestion du compte (email + mot de passe)**
- Base légale : Exécution du contrat (Art. 6.1.b RGPD)
- Détail : Nécessaire pour accéder au service commandé

**Traitement des préférences de voyage**
- Base légale : Exécution du contrat (Art. 6.1.b RGPD)
- Détail : Nécessaire à la génération personnalisée du guide

**Historique des commandes**
- Base légale : Exécution du contrat + Obligation légale (Art. 6.1.b et 6.1.c RGPD)
- Détail : Suivi des commandes et obligations comptables (7 ans)

**Traitement du paiement**
- Base légale : Exécution du contrat (Art. 6.1.b) — délégué à Stripe
- Détail : Les données bancaires ne transitent pas par TravelGuide AI

**Données de navigation / analytiques**
- Base légale : Intérêt légitime (Art. 6.1.f RGPD)
- Détail : Amélioration du service, sécurité — données agrégées et anonymisées`,
      },
      {
        id: "art4",
        title: "4. Finalités des Traitements",
        body: `Vos données personnelles sont utilisées exclusivement pour les finalités suivantes :

1. **Exécution du service :** création et gestion du compte client, réception du questionnaire, génération et livraison du guide de voyage.

2. **Facturation et obligations légales :** émission des justificatifs de paiement, archivage comptable pendant 7 ans (obligation légale française).

3. **Amélioration du service :** analyse agrégée et anonymisée de l'usage du site (pages visitées, taux de conversion). Ces données ne permettent pas d'identifier les utilisateurs individuellement.

4. **Communication transactionnelle :** envoi de l'email de confirmation de commande et du guide. Aucun email marketing n'est envoyé sans consentement explicite de votre part.`,
      },
      {
        id: "art5",
        title: "5. Durée de Conservation",
        body: `**Données de compte (email, mot de passe hashé)**
Conservées jusqu'à suppression du compte par l'utilisateur, ou 3 ans après la dernière connexion (inactivité).

**Préférences de voyage et guides générés**
Même durée que les données de compte.

**Données de facturation** (références commande, montant)
**7 ans** à compter de la transaction — obligation légale (Art. L. 123-22 Code de commerce).

**Données de navigation / analytiques**
13 mois glissants maximum.

**Logs de sécurité**
12 mois.

Passés ces délais, les données sont supprimées ou anonymisées de manière irréversible.`,
      },
      {
        id: "art6",
        title: "6. Vos Droits (RGPD Art. 15 à 22)",
        body: `Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :

**Droit d'accès (Art. 15)**
Vous pouvez demander à accéder à toutes les données vous concernant que nous détenons, ainsi qu'à des informations sur leur traitement.

**Droit de rectification (Art. 16)**
Vous pouvez demander la correction de données inexactes ou incomplètes.

**Droit à l'effacement — « Droit à l'oubli » (Art. 17)**
Vous pouvez demander la suppression de vos données, sous réserve des obligations légales de conservation (données de facturation : 7 ans).

**Droit à la portabilité (Art. 20)**
Vous pouvez recevoir vos données dans un format structuré et lisible par machine, ou demander leur transfert à un autre prestataire.

**Droit d'opposition (Art. 21)**
Vous pouvez vous opposer au traitement fondé sur l'intérêt légitime (analytics), pour des motifs tenant à votre situation particulière.

**Droit à la limitation (Art. 18)**
Vous pouvez demander la suspension temporaire du traitement dans certaines situations prévues par le RGPD.

**Comment exercer vos droits :**
Adressez votre demande par email à **[EMAIL DE CONTACT]** en indiquant votre adresse email de compte et le droit que vous souhaitez exercer. Nous répondons dans un délai d'un mois. Une vérification d'identité pourra être demandée.

**Réclamation auprès de la CNIL :**
Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une plainte auprès de la CNIL : https://www.cnil.fr/fr/plaintes`,
      },
      {
        id: "art7",
        title: "7. Sous-Traitants et Transferts de Données",
        body: `TravelGuide AI fait appel aux sous-traitants suivants. Des contrats de traitement de données ont été conclus conformément à l'Art. 28 du RGPD.

**Stripe — Traitement des paiements**
- Données transmises : Montant, devise, référence de commande, email (pour le reçu de paiement uniquement)
- À noter : Les données bancaires (numéro de carte, CVV) ne transitent jamais par nos serveurs
- Garanties RGPD : Stripe est certifiée PCI-DSS niveau 1. Pour les transferts hors UE, Stripe utilise les Clauses Contractuelles Types (CCT) approuvées par la Commission européenne
- Politique Stripe : https://stripe.com/fr/privacy

**OpenAI — Génération de contenu IA**
- Données transmises : Les préférences de voyage saisies dans le questionnaire (destination, dates, budget, style, contraintes)
- À noter : Email, mot de passe et historique de commandes ne sont jamais transmis à OpenAI
- Garanties RGPD : Option « Data Privacy » activée (vos données ne servent pas à entraîner les modèles). Transferts vers les États-Unis encadrés par les Clauses Contractuelles Types (CCT)
- Politique OpenAI : https://openai.com/policies/privacy-policy

**Google — Livraison des guides (Google Docs)**
- Données transmises : Adresse email du client (partage du document), contenu du guide généré
- À noter : Transferts vers les États-Unis encadrés par les CCT et le Data Privacy Framework UE–États-Unis
- Politique Google : https://policies.google.com/privacy

**Hébergeur — Infrastructure**
- Prestataire : [Vercel / OVH / Scaleway — à préciser]
- Données hébergées : Ensemble des données applicatives
- Localisation : Infrastructure européenne (UE/EEE)
- Garanties : Conformité RGPD contractuellement garantie`,
      },
      {
        id: "art8",
        title: "8. Cookies et Technologies de Suivi",
        body: `TravelGuide AI utilise uniquement des cookies techniques et analytiques légers :

**Cookie de session**
- Finalité : Maintien de la connexion au compte
- Durée : Durée de la session

**Cookie d'authentification**
- Finalité : Mémorisation de la session connectée
- Durée : 30 jours (si « rester connecté »)

**Analytics (PostHog — agrégé)**
- Finalité : Statistiques d'usage agrégées, amélioration du service
- Durée : 13 mois glissants

**Cookies publicitaires :** Aucun. TravelGuide AI ne dépose aucun cookie à des fins de ciblage publicitaire ni de partage avec des tiers à des fins commerciales.

Conformément à la délibération CNIL n° 2020-091, les cookies strictement nécessaires ne requièrent pas de consentement. Pour vous opposer aux cookies analytiques, contactez-nous à [EMAIL DE CONTACT].`,
      },
      {
        id: "art9",
        title: "9. Sécurité des Données",
        body: `TravelGuide AI met en œuvre les mesures suivantes pour protéger vos données :

- **HTTPS (TLS) :** Toutes les communications entre votre navigateur et nos serveurs sont chiffrées (TLS 1.2 minimum).
- **Mots de passe hashés :** Les mots de passe ne sont jamais stockés en clair — ils sont hashés et salés (algorithme bcrypt).
- **Aucune donnée bancaire stockée :** Le traitement des paiements est entièrement délégué à Stripe (PCI-DSS niveau 1).
- **Accès restreint :** L'accès aux données personnelles est limité au responsable de traitement et aux sous-traitants listés à l'Art. 7, dans la limite stricte de leurs missions.
- **Minimisation :** Nous ne collectons que les données strictement nécessaires au service.

En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits, nous nous engageons à vous en informer dans les meilleurs délais (Art. 34 RGPD).`,
      },
      {
        id: "art10",
        title: "10. Modifications de la Politique",
        body: `Nous nous réservons le droit de modifier cette politique de confidentialité, notamment pour nous conformer à l'évolution de la réglementation. La date de dernière mise à jour est indiquée en haut du document.

En cas de modification substantielle, vous serez informé(e) par email ou via une notification sur le Site.`,
      },
      {
        id: "art11",
        title: "11. Contact et Réclamation",
        body: `**Pour exercer vos droits ou pour toute question :**
Email : [EMAIL DE CONTACT]

**Pour déposer une plainte auprès de l'autorité de contrôle :**
Commission Nationale de l'Informatique et des Libertés (CNIL)
3 Place de Fontenoy — TSA 80715 — 75334 PARIS CEDEX 07
Téléphone : 01 53 73 22 22
Site : https://www.cnil.fr
Formulaire en ligne : https://www.cnil.fr/fr/plaintes`,
      },
    ],
  },
  en: {
    lang: "EN",
    other: "FR",
    title: "Privacy Policy",
    subtitle: "TravelGuide AI — Version [DATE]",
    back: "← Back to site",
    note: "This is a faithful English summary. In case of conflict, the French version prevails.",
    sections: [
      {
        id: "s1",
        title: "1. Data Controller",
        body: `TravelGuide AI is operated by:

- **Name / Company:** [FULL NAME OR COMPANY NAME]
- **Status:** Sole trader (auto-entrepreneur)
- **SIRET:** [SIRET NUMBER]
- **Address:** [FULL ADDRESS], France
- **Contact email:** [CONTACT EMAIL]
- **Website:** https://spiregg.nanocorp.app

For any data protection enquiry, contact [CONTACT EMAIL] directly.`,
      },
      {
        id: "s2",
        title: "2. Data Collected",
        body: `We collect only the data strictly necessary to provide the service:

- **Email address:** account creation, guide delivery, communication
- **Password (hashed & salted — never in plain text):** account security
- **Travel preferences** (destination, dates, budget, travel style, constraints): personalised guide generation
- **Order history** (references, amounts, dates): service tracking, billing, legal obligations
- **Technical data** (IP address, navigation data via analytics): security, aggregated usage statistics

**Not collected:** card numbers, CVV, IBAN — handled exclusively by Stripe.`,
      },
      {
        id: "s3",
        title: "3. Legal Basis",
        body: `Each processing activity has an identified legal basis under Art. 6 GDPR:

- **Account management:** Contract performance (Art. 6.1.b)
- **Travel preferences:** Contract performance (Art. 6.1.b) — required to generate the guide
- **Order history:** Contract + Legal obligation (Art. 6.1.b & 6.1.c)
- **Payment processing:** Contract performance (Art. 6.1.b) — delegated to Stripe
- **Analytics / navigation data:** Legitimate interest (Art. 6.1.f) — aggregated & anonymised`,
      },
      {
        id: "s4",
        title: "4. Purposes",
        body: `Your data is used solely for:

1. **Service delivery:** account management, questionnaire processing, guide generation and delivery.
2. **Billing & legal compliance:** invoicing, 7-year accounting records.
3. **Service improvement:** aggregated, anonymised usage analysis — no individual identification.
4. **Transactional emails:** order confirmation and guide delivery only. No marketing emails without explicit consent.`,
      },
      {
        id: "s5",
        title: "5. Retention Periods",
        body: `- **Account data (email, hashed password):** until account deletion or 3 years of inactivity
- **Travel preferences & generated guides:** same as account data
- **Billing data:** **7 years** (French legal accounting requirement)
- **Analytics data:** rolling 13 months
- **Security logs:** 12 months

After these periods, data is deleted or irreversibly anonymised.`,
      },
      {
        id: "s6",
        title: "6. Your Rights (GDPR Art. 15–22)",
        body: `You have the following rights regarding your personal data:

- **Access (Art. 15):** obtain a copy of all data we hold about you.
- **Rectification (Art. 16):** correct inaccurate or incomplete data.
- **Erasure / Right to be forgotten (Art. 17):** request deletion (subject to 7-year billing retention obligation).
- **Portability (Art. 20):** receive your data in a structured, machine-readable format.
- **Objection (Art. 21):** object to processing based on legitimate interest (e.g. analytics).
- **Restriction (Art. 18):** request temporary suspension of processing in specific circumstances.

**To exercise your rights:** email **[CONTACT EMAIL]** stating your account email and the right you wish to exercise. We will respond within one month. Identity verification may be requested.

**To file a complaint:** CNIL — https://www.cnil.fr/fr/plaintes`,
      },
      {
        id: "s7",
        title: "7. Sub-processors and Transfers",
        body: `Data Processing Agreements have been signed with all sub-processors (Art. 28 GDPR):

**Stripe — Payments**
- Data shared: order amount, email (for receipt)
- No card data ever reaches TravelGuide AI servers
- Safeguards: PCI-DSS Level 1, Standard Contractual Clauses (SCCs) for non-EU transfers
- Policy: https://stripe.com/fr/privacy

**OpenAI — AI guide generation**
- Data shared: travel preferences from the questionnaire only
- Email, password, order history are never sent to OpenAI
- Safeguards: Data Privacy option enabled (no training use), SCCs for US transfers
- Policy: https://openai.com/policies/privacy-policy

**Google — Guide delivery (Google Docs)**
- Data shared: email address, guide content
- Safeguards: EU–US Data Privacy Framework, SCCs
- Policy: https://policies.google.com/privacy

**Hosting provider (Vercel/OVH/Scaleway)**
- EU-based infrastructure, GDPR-compliant contract`,
      },
      {
        id: "s8",
        title: "8. Cookies",
        body: `Only technically necessary cookies and lightweight analytics (PostHog, aggregated) are used.

**No advertising cookies. No data shared with third parties for commercial purposes.**

Strictly necessary cookies do not require consent under CNIL guidelines. To object to analytics cookies, contact [CONTACT EMAIL].`,
      },
      {
        id: "s9",
        title: "9. Security",
        body: `- **HTTPS (TLS):** all data in transit is encrypted (minimum TLS 1.2).
- **Hashed passwords:** passwords are hashed and salted (bcrypt) — never stored in plain text.
- **No payment card data stored:** entirely handled by Stripe (PCI-DSS Level 1).
- **Restricted access:** data access is limited to the data controller and listed sub-processors.
- **Data minimisation:** we only collect what is strictly necessary.

In the event of a data breach likely to cause high risk, we will notify you without undue delay (Art. 34 GDPR).`,
      },
      {
        id: "s10",
        title: "10. Policy Updates",
        body: `We may update this policy to reflect regulatory changes. The version date is shown at the top of the document.

For material changes, you will be notified by email or via a site notification.`,
      },
      {
        id: "s11",
        title: "11. Contact",
        body: `**For rights requests or any privacy question:**
Email: [CONTACT EMAIL]

**To lodge a complaint with the supervisory authority:**
CNIL — Commission Nationale de l'Informatique et des Libertés
Website: https://www.cnil.fr
Online complaint form: https://www.cnil.fr/fr/plaintes`,
      },
    ],
  },
};

function renderBody(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const bold = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-4 list-disc" dangerouslySetInnerHTML={{ __html: bold.slice(2) }} />
      );
    }
    if (/^\d+\. /.test(line)) {
      return (
        <li key={i} className="ml-4 list-decimal" dangerouslySetInnerHTML={{ __html: bold.replace(/^\d+\. /, "") }} />
      );
    }
    if (line.trim() === "") return <br key={i} />;
    return (
      <p key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: bold }} />
    );
  });
}

export default function PrivacyPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#F8F4EF]" style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F8F4EF]/95 backdrop-blur border-b border-[#425C47]/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#425C47]/60 hover:text-[#425C47] transition-colors">
            {t.back}
          </Link>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#425C47]/20 hover:bg-[#425C47] hover:text-white transition-colors"
          >
            {t.other}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <h1
            className="text-3xl font-bold text-[#425C47] mb-2"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {t.title}
          </h1>
          <p className="text-sm text-[#425C47]/50">{t.subtitle}</p>
          <p className="mt-3 text-xs text-[#425C47]/40 italic border-l-2 border-[#E8A87C] pl-3">{t.note}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {t.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-lg font-semibold text-[#425C47] mb-3 pb-1 border-b border-[#425C47]/10">
                {section.title}
              </h2>
              <div className="text-sm text-[#425C47]/75 leading-relaxed space-y-1">
                {renderBody(section.body)}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-[#425C47]/10 text-center text-xs text-[#425C47]/40">
          <p>TravelGuide AI — Spire GG</p>
          <p className="mt-1">
            {lang === "fr"
              ? "Pour toute question : [EMAIL DE CONTACT]"
              : "For any question: [CONTACT EMAIL]"}
          </p>
        </div>
      </main>
    </div>
  );
}
