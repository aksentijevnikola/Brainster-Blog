function partnershipForm() {
    return `<div class="modal-bg-opacity">
    <div class="modal">
        <div class="modal-title">
            <p class="title-text">Приклучи се</p>
            <i class="fa fa-times-circle form-close" aria-hidden="true"></i>
        </div>
        <form>
            <div class="form-group">
                <div class="label-container">
                  <label for="name">Име и Презиме (задолжително)</label>
                  <label for="warning" class="name-warning warning">Внесете Име и Презиме</label>
                </div>
                <input type="text" for="name" class="partner-name-input" placeholder="Внесете Име и Презиме">
            </div>
            <div class="form-group">
                <label for="company">Име на Компанија (незадолжително)</label>
                <input type="text" for="name" class="partner-company-input" placeholder="Внесете име на Вашата Компанија">
            </div>
            <div class="form-group">
                <div class="label-container">
                  <label for="number">Телефонски број (задолжително)</label>
                  <label for="warning" class="phone-warning warning">Внесете Телефонски Број</label>
                </div>
                <input type="text" for="number" class="partner-phone-input" placeholder="Внесете Телефонски Број">
            </div>
            <div class="form-group">
                <label for="suggestion">Предлог за Соработка (незадолжително)</label>
                <textarea type="text" for="suggestion" class="partner-suggestion-input" rows="6"  placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"></textarea>
            </div>
            <div class="form-buttons">
                <button class="form-close">ИСКЛУЧИ</button>
                <button class="form-send partner-form-submit"><i class="fa fa-arrow-right" aria-hidden="true"></i> ИСПРАТИ ФОРМA</button>
            </div>
        </form>
    </div>
  </div>`
}
function joinForm() {
    return `<div class="modal-bg-opacity">
    <div class="modal">
        <div class="modal-title">
            <p class="title-text">Приклучи се</p>
            <i class="fa fa-times-circle form-close" aria-hidden="true"></i>
        </div>
        <form>
            <div class="form-group">
                <div class="label-container">
                  <label for="name">Име и Презиме (задолжително)</label>
                  <label for="warning" class="name-warning warning">Внесете Име и Презиме</label>
                </div>
                <input type="text" for="name" class="join-name-input" placeholder="Внесете Име и Презиме">
            </div>
            <div class="form-group">
                <div class="label-container">
                  <label for="company">Eмаил Адреса (задолжително)</label>
                  <label for="warning" class="email-warning warning">Внесете Eмаил Адреса</label>
                </div>
                <input type="mail" for="email" class="join-email-input" placeholder="Внесете ја вашата Емаил адреса">
            </div>
            <div class="form-group">
                <div class="label-container">
                  <label for="number">Телефонски број (задолжително)</label>
                  <label for="warning" class="phone-warning warning">Внесете Телефонски Број</label>
                </div>
                <input type="text" for="number" class="join-phone-input" placeholder="Внесете Телефонски Број">
            </div>
            <div class="form-buttons">
                <button class="form-close">ИСКЛУЧИ</button>
                <button class="form-send join-form-submit"><i class="fa fa-arrow-right" aria-hidden="true"></i> ИСПРАТИ ФОРМA</button>
            </div>
        </form>
    </div>
  </div>`
}
function innovationsForm() {
    return `<div class="modal-bg-opacity">
    <div class="modal">
        <div class="modal-title">
            <p class="title-text">Приклучи се</p>
            <i class="fa fa-times-circle form-close" aria-hidden="true"></i>
        </div>
        <form>
            <div class="form-group">
                <div class="label-container">
                  <label for="name">Име и Презиме (задолжително)</label>
                  <label for="warning" class="name-warning warning">Внесете Име и Презиме</label>
                </div>
                <input type="text" for="name" class="innovation-name-input" placeholder="Внесете Име и Презиме">
            </div>
            <div class="form-group">
                <label for="company">Име на Компанија (незадолжително)</label>
                <input type="text" for="name" class="innovation-company-input" placeholder="Внесете име на Вашата Компанија">
            </div>
            <div class="form-group">
                <div class="label-container">
                  <label for="number">Телефонски број (задолжително)</label>
                  <label for="warning" class="phone-warning warning">Внесете Телефонски Број</label>
                </div>
                <input type="text" for="number" class="innovation-phone-input" placeholder="Внесете Телефонски Број">
            </div>
            <div class="form-group">
                <div class="label-container">
                  <label for="company">Eмаил Адреса (задолжително)</label>
                  <label for="warning" class="email-warning warning">Внесете Eмаил Адреса</label>
                </div>
                <input type="mail" for="email" class="innovation-email-input" placeholder="Внесете ја вашата Емаил адреса">
            </div>
            <div class="form-group">
                <div class="label-container">
                  <label for="suggestion">Потреби на компанијата (задолжително)</label>
                  <label for="warning" class="text-warning warning">Внесете ја вашата идеа</label>
                </div>
                <textarea type="text" for="suggestion" class="innovation-text-input" rows="6" placeholder="Во 300 карактери, опишете ги вашите потреби."></textarea>
            </div>
            <div class="form-buttons">
                <button class="form-close">ИСКЛУЧИ</button>
                <button class="form-send innovation-form-submit"><i class="fa fa-arrow-right" aria-hidden="true"></i> ИСПРАТИ ФОРМA</button>
            </div>
        </form>
    </div>
  </div>`
}