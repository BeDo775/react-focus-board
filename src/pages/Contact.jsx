import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }

    
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      errs.phone = 'Phone number must contain only digits';
    } else if (formData.phone.length < 10) {
      errs.phone = 'Phone number must be at least 10 digits';
    }

    if (!formData.message.trim()) errs.message = 'Message is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="container mt-5 text-light" style={{ maxWidth: '600px' }}>
      <h2 className="text-primary mb-4">Contact Us</h2>
      {submitted && (
        <div className="alert alert-success">
          🎉 Thank you! Your message has been submitted successfully.
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded border border-secondary">
        <div className="mb-3">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            className={`form-control bg-dark text-light border-secondary ${errors.fullName ? 'is-invalid' : ''}`}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className={`form-control bg-dark text-light border-secondary ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number *</label>
          <input
            type="text"
            className={`form-control bg-dark text-light border-secondary ${errors.phone ? 'is-invalid' : ''}`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Message *</label>
          <textarea
            rows="4"
            className={`form-control bg-dark text-light border-secondary ${errors.message ? 'is-invalid' : ''}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-100 fw-bold">Send Message</button>
      </form>
    </div>
  );
}