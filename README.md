Based on your actual project structure, here's the updated README:

# Subscription API Backend

A secure and scalable subscription management API built with Node.js, featuring rate limiting, fraud protection, and MongoDB persistence.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Security**: Arcjet (rate limiting, bot protection)
- **Cache/Queue**: Upstash (Redis)
- **Authentication**: JWT

## 📁 Project Structure

```
├── config/
│   ├── database.js
│   └── ...
├── controllers/
│   ├── authController.js
│   └── subscriptionController.js
├── database/
│   ├── connection.js
│   └── ...
├── imports/
│   └── ...
├── middlewares/
│   ├── auth.js
│   ├── rateLimiter.js
│   └── ...
├── models/
│   ├── User.js
│   └── Subscription.js
├── routes/
│   ├── authRoutes.js
│   └── subscriptionRoutes.js
├── utils/
│   └── ...
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## 🔧 Installation

```bash
# Clone repository
git clone https://github.com/taha203040/subscribtion_app_api.git
cd subscription-api

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
```

## ⚙️ Environment Variables

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ARCJET_API_KEY=your_arcjet_key
UPSTASH_REDIS_URL=your_upstash_redis_url
```

## 🛣️ API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |

### Subscriptions
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/subscriptions` | Get all subscriptions |
| GET | `/api/subscriptions/:id` | Get single subscription |
| POST | `/api/subscriptions` | Create subscription |
| PUT | `/api/subscriptions/:id` | Update subscription |
| DELETE | `/api/subscriptions/:id` | Cancel subscription |

## 🔒 Security Features

- **Arcjet**: Rate limiting, bot detection, and fraud protection
- **Upstash**: Caching and rate limiting storage
- **JWT**: Secure authentication
- **MongoDB**: Data persistence with validation

## 📦 Key Dependencies

```json
{
  "express": "^4.18.0",
  "mongoose": "^7.0.0",
  "jsonwebtoken": "^9.0.0",
  "@arcjet/node": "^1.0.0",
  "ioredis": "^5.3.0",
  "dotenv": "^16.0.0",
  "bcryptjs": "^2.4.0"
}
```

## 🚦 Running the App

```bash
# Development
npm run dev

# Production
npm start
```
