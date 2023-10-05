import nodemailer from 'nodemailer';

export const handler = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Создайте объект транспорта для отправки почты, используя настройки вашего почтового провайдера
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Используйте свой почтовый сервис
      auth: {
        user: 'd85590017@gmail.com',
        pass: 'Kniz1077',
      },
    });

    // Настройте параметры письма
    const mailOptions = {
      from: 'd85590017@gmail.com',
      to: email,
      subject: 'Новый пользователь',
      text: 'Текст письма',
    };

    try {
      // Отправьте письмо
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Письмо отправлено успешно' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Произошла ошибка при отправке письма' });
    }
  } else {
    res.status(405).end();
  }
};
