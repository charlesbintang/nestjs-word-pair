<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

NestJS WordPair API - Backend untuk menyimpan data wordpair dari aplikasi Flutter.

API ini menyediakan endpoint REST untuk melakukan CRUD (Create, Read, Update, Delete) operasi pada wordpair. Data disimpan dalam memori (in-memory storage) dengan fitur auto-generate ID dan timestamp.

## API Endpoints

Base URL: `http://localhost:3000`

### WordPairs

#### 1. Membuat WordPair Baru
```http
POST /wordpairs
Content-Type: application/json

{
  "firstWord": "Hello",
  "secondWord": "World",
  "category": "greeting" // optional
}
```

**Response:**
```json
{
  "id": "1234567890-abc123",
  "firstWord": "Hello",
  "secondWord": "World",
  "category": "greeting",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### 2. Mendapatkan Semua WordPairs
```http
GET /wordpairs
```

**Response:**
```json
[
  {
    "id": "1234567890-abc123",
    "firstWord": "Hello",
    "secondWord": "World",
    "category": "greeting",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### 3. Mendapatkan WordPair Berdasarkan ID
```http
GET /wordpairs/:id
```

**Response:**
```json
{
  "id": "1234567890-abc123",
  "firstWord": "Hello",
  "secondWord": "World",
  "category": "greeting",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### 4. Update WordPair
```http
PATCH /wordpairs/:id
Content-Type: application/json

{
  "firstWord": "Hi", // optional
  "secondWord": "There", // optional
  "category": "greeting" // optional
}
```

**Response:**
```json
{
  "id": "1234567890-abc123",
  "firstWord": "Hi",
  "secondWord": "There",
  "category": "greeting",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T01:00:00.000Z"
}
```

#### 5. Hapus WordPair
```http
DELETE /wordpairs/:id
```

**Response:** `204 No Content`

#### 6. Hapus Semua WordPairs
```http
DELETE /wordpairs
```

**Response:** `204 No Content`

## Contoh Penggunaan dari Flutter

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

// Membuat wordpair baru
Future<void> createWordPair(String firstWord, String secondWord) async {
  final response = await http.post(
    Uri.parse('http://localhost:3000/wordpairs'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      'firstWord': firstWord,
      'secondWord': secondWord,
    }),
  );
  
  if (response.statusCode == 201) {
    print('WordPair created successfully');
  }
}

// Mendapatkan semua wordpairs
Future<List<Map<String, dynamic>>> getAllWordPairs() async {
  final response = await http.get(
    Uri.parse('http://localhost:3000/wordpairs'),
  );
  
  if (response.statusCode == 200) {
    return List<Map<String, dynamic>>.from(jsonDecode(response.body));
  }
  return [];
}
```

## Catatan Penting

- Data disimpan dalam memori (in-memory storage), data akan hilang saat server di-restart
- Setiap wordpair memiliki ID yang auto-generated dan timestamp (createdAt, updatedAt)
- Input data divalidasi secara otomatis menggunakan class-validator
- CORS sudah diaktifkan untuk memungkinkan akses dari aplikasi Flutter yang berjalan di browser
- Untuk aplikasi Flutter web di browser, gunakan `http://localhost:3000` atau IP server Anda

## Project setup

```bash
mysql -u root -p word_pair_db < src/database/migrations/001-create-word-pairs.sql
```

## Running the Application

```bash
# development mode
npm run start:dev

# production mode
npm run start:prod
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Word Pairs

- `POST /word-pairs` - Create a new word pair
- `GET /word-pairs` - Get all word pairs
- `GET /word-pairs/:id` - Get a word pair by ID
- `PATCH /word-pairs/:id` - Update a word pair
- `DELETE /word-pairs/:id` - Delete a word pair

### Request/Response Format

**Create Word Pair:**
```json
POST /word-pairs
{
  "word1": "Hello",
  "word2": "World",
  "description": "A common greeting pair"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    "id": 1,
    "word1": "Hello",
    "word2": "World",
    "description": "A common greeting pair",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "Bad Request"
}
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
