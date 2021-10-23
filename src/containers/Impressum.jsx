import React from 'react'
import { Link } from 'react-router-dom'

export default function Impressum() {
    return (
        <div>
            <Link
              to="/"
              className="footer-text">« HOME</Link>
            <h2>Impressum</h2>
            <p>Angaben gemäß § 5 TMG</p>
            <p>Dominik Ruschmann <br />
                Kellerfeld 27<br />
                77836 Rheinmünster <br />
            </p>
            <p><strong>Kontakt:</strong> <br />
                Telefon: +49 01702490326 <br />
                E-Mail: <a href='mailto:dominik.rsmn@gmail.com'>dominik.rsmn@gmail.com</a> <br/>
            </p>
            <p style={{maxWidth: 1000}}><strong>Haftungsausschluss: </strong><br /><br />
                <strong>Haftung für Links</strong><br /><br />
                Unser Angebot enthält Links zu externen Webseiten Dritter,
                auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p><br /><p> Website Impressum erstellt durch <a href="https://www.impressum-generator.de">impressum-generator.de</a> von der <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
            </p>
 
        </div>
        
    )
}
