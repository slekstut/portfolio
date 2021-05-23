<template>
  <div class="contact-section" id="contact">
    <div>
      <h1 class="contact-title">Contact</h1>
      <form class="contact-form" @submit.prevent="sendEmail" autocomplete="off">
        <div class="floating-form">
          <div class="floating-label" :class="{ 'form-error': $v.name.$error }">
            <input
              class="floating-input"
              type="text"
              placeholder=" "
              name="name"
              v-model.trim="$v.name.$model"
            />
            <span class="highlight"></span>
            <label>Name</label>
            <div class="error" v-if="!$v.name.required & $v.name.$dirty">
              Field name is required.
            </div>
            <div class="error" v-if="!$v.name.minLength">
              Field name is not less than 4 characters.
            </div>
            <div class="error" v-if="!$v.name.maxLength">
              Field name is not more than 40 characters.
            </div>
          </div>
          <div
            class="floating-label"
            :class="{ 'form-error': $v.email.$error }"
          >
            <input
              class="floating-input"
              type="text"
              placeholder=" "
              name="email"
              v-model.trim="$v.email.$model"
            />
            <span class="highlight"></span>
            <label>Email</label>
            <div class="error" v-if="!$v.email.required & $v.email.$dirty">
              Field email is required.
            </div>
            <div class="error" v-if="!$v.email.email">
              Please insert valid email address.
            </div>
          </div>
          <div
            class="floating-label"
            :class="{ 'form-error': $v.message.$error }"
          >
            <textarea
              class="floating-input floating-textarea"
              id="scrollbar"
              placeholder=" "
              name="message"
              v-model="$v.message.$model"
            ></textarea>
            <span class="highlight"></span>
            <label>Message</label>
            <div class="error" v-if="!$v.message.required & $v.message.$dirty">
              Fiels message is required.
            </div>
            <div class="error" v-if="!$v.message.minLength">
              Field message is not less than 10 characters.
            </div>
            <div class="error" v-if="!$v.message.maxLength">
              Field message is not more than 400 characters.
            </div>
          </div>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        <button class="submit-btn" type="submit" value="Send">
          Send message
        </button>
      </form>
    </div>
    <div class="contact-text">
      <h1 class="get-in-touch-text">get in touch with me!</h1>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_9px41zAYNoK4p3rWFjQBR");
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(40),
    },
    email: {
      required,
      email,
    },
    message: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(400),
    },
  },
  methods: {
    sendEmail(e) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          emailjs.sendForm(
            process.env.VUE_APP_SERVICE_CODE,
            process.env.VUE_APP_TEMPLATE_CODE,
            e.target,
            process.env.VUE_APP_USER_CODE,
            {
              name: this.name,
              email: this.email,
              message: this.message,
            }
          );
          // Reset form field
          this.name = "";
          this.email = "";
          this.message = "";
          this.$v.$reset();
        } catch (error) {
          console.log({ error });
        }
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.$v.$invalid = false;
        }, 500);
      }
    },
  },
};
</script>

