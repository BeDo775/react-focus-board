import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });

    setSent(false);
  };

  const validate = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only digits';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSent(true);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adelrahman.sayed.2024@aiu.edu.eg',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1069755100',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dabaa, Matrouh Egypt',
    },
  ];

  return (
    <div className="page page-narrow-lg">
      <h1 className="page-title">Contact Us</h1>

      <p className="page-subtitle">
        Have a question or feedback? Send a message and we will get back to you shortly.
      </p>

      <div className="contact-grid">

        {/* Contact Information */}
        <div className="contact-info">
          {contactDetails.map((item) => (
            <div key={item.label} className="contact-info-item">
              <div className="contact-info-icon">
                <item.icon />
              </div>

              <div>
                <p className="contact-info-label">{item.label}</p>
                <p className="contact-info-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">

          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name *</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`form-control ${
                errors.fullName ? 'is-invalid' : ''
              }`}
              placeholder="Your full name"
            />

            {errors.fullName && (
              <div className="invalid-feedback">
                {errors.fullName}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email *</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${
                errors.email ? 'is-invalid' : ''
              }`}
              placeholder="your.email@example.com"
            />

            {errors.email && (
              <div className="invalid-feedback">
                {errors.email}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label className="form-label">Phone Number *</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-control ${
                errors.phone ? 'is-invalid' : ''
              }`}
              placeholder="Enter your phone number"
            />

            {errors.phone && (
              <div className="invalid-feedback">
                {errors.phone}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label">Message *</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`form-control ${
                errors.message ? 'is-invalid' : ''
              }`}
              placeholder="Write your message here..."
            />

            {errors.message && (
              <div className="invalid-feedback">
                {errors.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-send">
            <Send />
            Send Message
          </button>

          {/* Success Message */}
          {sent && (
            <p className="form-success">
              Message sent successfully!
            </p>
          )}

        </form>
      </div>
    </div>
  );
}