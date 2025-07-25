 import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Message sent!
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          inputProps={{ 'aria-label': 'Name' }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          inputProps={{ 'aria-label': 'Email' }}
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          required
          sx={{ mb: 2 }}
          inputProps={{ 'aria-label': 'Message' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitting}
          aria-label="Send message"
        >
          {submitting ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;