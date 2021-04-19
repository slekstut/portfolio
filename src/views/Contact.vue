<template>
  <div class="contact-section">
    <div >
      <h1 id="contact-title">Contact</h1>
      <form action="">
        <div class="field">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
          />
          <label for="fullname">Name</label>
        </div>

        <div class="field">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
          />
          <label for="email">Email</label>
        </div>
        <div class="field">
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="3"
            placeholder="Your message for me"
          ></textarea>
          <label for="message">Message</label>
        </div>
        <input type="submit" />
      </form>
    </div>
    <div>
      <h1 id="get-in-touch-text">get in touch if you have web project idea!</h1>
    </div>
  </div>
</template>
