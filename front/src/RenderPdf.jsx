export default function RenderPdf() {
    return (
        <div id="invoice-template">
            <div>

                <table id="header">
                    <tr>
                        <th id="header-col-1"></th>
                        <th id="header-col-2"></th>
                    </tr>
                    <tr>
                        <td id="logo-wrapper">
                            %logo%
                        </td>
                        <td id="document-type-wrapper">
                            <p id="document-type">%document-title%</p><br />
                            <b>%company-from%</b><br />
                            %address-from%<br />
                            %zip-from%, %city-from%<br />
                            %country-from%<br />
                            Interlocuteur: %sender-custom-1%<br />
                            %sender-custom-2%<br />
                            %sender-custom-3%
                        </td>
                    </tr>
                </table>
                <br />
                <hr />
                <table id="receiver-details-wrapper">
                    <tr>
                        <th id="receiver-details-wrapper-col-1"></th>
                        <th id="receiver-details-wrapper-col-2"></th>
                        <th id="receiver-details-wrapper-col-3"></th>
                    </tr>
                    <tr>
                        <td>
                            <b>%company-to%</b>
                            <br />
                            %address-to%<br />
                            %zip-to%, %city-to%<br />
                            %country-to%<br />
                            %client-custom-1%<br />
                            %client-custom-2%<br />
                            %client-custom-3%
                        </td>
                        <td id="details-label-wrapper">
                            <b>%number-title%:</b><br />
                            <b>%date-title%:</b><br />
                        </td>
                        <td>
                            %number%<br />
                            %date%<br />
                        </td>
                    </tr>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th id="prestation-table"></th>
                        </tr>
                        <tr>
                            <td id="prestation-table-info"></td>
                        </tr>
                    </thead>
                </table>
                <br />
                <table id="products-table">
                    <thead>
                        <tr>
                            <th id="products-table-col-1"></th>
                            <th id="products-table-col-2"></th>
                            <th id="products-table-col-3"></th>
                            <th id="products-table-col-4"></th>
                            <th id="products-table-col-5"></th>
                        </tr>
                        <tr>
                            <td><b>%products-header-products%</b></td>
                            <td align="center"><b>Un</b></td>
                            <td align="center"><b>%products-header-quantity%</b></td>
                            <td align="center"><b>%products-header-price%</b></td>
                            <td align="right"><b>%products-header-total%</b></td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <hr />
                            </td>
                        </tr>
                    </thead>
                    <tbody id="products-child">
                        <tr>
                            <td align="left">%description%</td>
                            <td align="left">%unite%</td>
                            <td align="left">%quantity%</td>
                            <td align="left">%price%</td>
                            <td align="right">%row-total%</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">
                                <hr />
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <br />
                <table id="total-wrapper">
                    <thead>
                        <tr>
                            <th id="total-wrapper-col-1"></th>
                            <th id="total-wrapper-col-2"></th>
                            <th id="total-wrapper-col-3"></th>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>Remise:</b></td>
                            <td id="pourcentage-remise">10%</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>Montant remise:</b></td>
                            <td id="montant-remise"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>%subtotal-title%:</b></td>
                            <td>%subtotal%</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='tax-child'>
                            <td></td>
                            <td><b>%tax-notation% %tax-rate%%:</b></td>
                            <td>%tax%</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td colspan="2">
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>%total-title%:</b></td>
                            <td>%total%</td>
                        </tr>
                    </tfoot>
                </table>
                <br />
                <br />
                <p className="escompte">Escompte de 0 % pour paiement anticipé.<br />
                    Taux de pénalité de retard : 0 %.</p>
                <table className='financement'>
                    <thead>
                        <tr>
                            <th style="width: 25%"></th>
                            <th style="width: 25%"></th>
                            <th style="width: 25%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Mode de Règlement : <span id="pdf-cheque"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Acompte : <span id="accompte-montant"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="pt-20">
                                <div className="checkbox" id="pdf-comptant-check"></div>
                                <p>Comptant : <span id="pdf-comptant-text" /></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="pb-20">
                                <div className="checkbox" id="pdf-financement-check"></div>
                                <p>Financement : <span id="pdf-financement-text"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Organisme préteur : <span id="organisme-preteur"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Montant du crédit : <span id="montant-credit"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Taux nominal : <span id="taux-nominal"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Mensualité de : <span id="mensualite-de"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="pt-20">
                                <div className="checkbox" id="pdf-assurance-check"></div>
                                <p>Avec assurance : </p>
                            </td>
                            <td className="pt-20">
                                <div className="checkbox" id="pdf-no-assurance-check"></div>
                                <p>Sans assurance : </p>
                            </td>
                            <td className="pt-20">
                                <p> Type d'assurance : <span id="type-assurance"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Nombre de mensualité : <span id="nombre-mensualite"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>TEG de : <span id="teg-de"></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Cout total du crédit : <span id="total-credit"></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table className="financement">
                    <thead>
                        <tr>
                            <th style="width: 33%"></th>
                            <th style="width: 33%"></th>
                            <th style="width: 33%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Date de souhait : <span id="pdf-date-souhait"></span>
                            </td>
                        </tr>
                        <tr>
                            <td className="pb-20">
                                Date limite de fin de chantier : <span id="pdf-date-fin"></span>
                            </td >
                        </tr>
                        <br />
                        <tr>
                            <td className="pt-20">
                                À : <span id="signature-ville"></span>
                            </td>
                            <td className="pt-20">
                                Le : <span id="signature-date"></span>
                            </td>
                            <td className="pt-20">
                                Devis N° : <span id="signature-number"></span>
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td className="pt-20">
                                Signature entreprise:
                            </td>
                            <td className="pt-20">
                                Bon pour accord<br />
                                Signature Client:
                            </td>
                        </tr>
                        <tr>
                            <td className="pt-60">

                            </td>
                        </tr>
                    </tbody>
                </table>
                <table id="bottom-notice-wrapper">
                    <thead>
                        <tr>
                            <th id="bottom-notice-wrapper-col-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>%bottom-notice%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}