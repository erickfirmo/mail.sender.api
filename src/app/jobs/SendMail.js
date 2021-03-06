import Mail from '../../lib/Mail';

class SendMail {
  get key() {
    return 'SendMail';
  }

  async handle({ data }) {
    const { sender, recipients, subject, bodyurl } = data;

    await Mail.sendMail({
      to: `${sender.name} <${sender.email}>`,
      from: `${sender.name} <${sender.email}>`,
      bcc: recipients,
      subject,
      template: 'template',
      html: bodyurl,
    });
  }
}

export default new SendMail();
