"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      action="https://formspree.io/f/mvgrjbyp"
      method="POST"
      className="space-y-4 max-w-lg mx-auto"
      onSubmit={() => setSubmitted(true)}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Textarea name="message" placeholder="Your Message" required />

      <Button type="submit">Send Message</Button>

      {submitted && <p className="text-green-600">Thanks! I'll get back to you soon.</p>}
    </form>
  );
}
