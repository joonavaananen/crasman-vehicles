const { LOCALE = 'fi-FI' } = process.env;

class Vehicle {
  constructor(props) {
    Object.assign(this, props);

    this.price = parseInt(this.price).toLocaleString(LOCALE, {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });

    this.kilometrage = `${parseInt(this.kilometrage).toLocaleString(
      LOCALE
    )} km`;

    this.url = `/vehicle/${encodeURIComponent(
      this.registration_number?.toLowerCase()
    )}`;
  }
}

export { Vehicle };
