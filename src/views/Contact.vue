<template>
  <div class="contact-section">
    <div>
      <h1 id="contact-title">Contact</h1>
      <form class="contact-form">
        <div class="floating-form">
          <div class="floating-label">
            <input class="floating-input" type="text" placeholder=" " />
            <span class="highlight"></span>
            <label>Name</label>
          </div>

          <div class="floating-label">
            <input class="floating-input" type="text" placeholder=" " />
            <span class="highlight"></span>
            <label>Email</label>
          </div>

          <div class="floating-label">
            <textarea class="floating-input floating-textarea" id="scrollbar" placeholder=" "></textarea>
            <span class="highlight"></span>
            <label>Message</label>
          </div>
        </div>
        <button class="submit-btn" type="submit">Send message</button>
      </form>
    </div>
    <div class="contact-text">
      <h1 id="get-in-touch-text">get in touch with me!</h1>
    </div>
  </div>
</template>
