# Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup

#### Create MySQL Database
```sql
CREATE DATABASE word_pair_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### Run Migration
```bash
mysql -u root -p word_pair_db < src/database/migrations/001-create-word-pairs.sql
```

### 3. Environment Configuration

Create `.env` file in the root directory:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=word_pair_db
PORT=3000
NODE_ENV=development
```

### 4. Run Application
```bash
npm run start:dev
```

## Architecture Overview

### TypeScript Strict Mode
- All strict compiler options enabled
- Full type safety throughout the codebase
- No implicit any types

### Database Layer
- **Sequelize ORM**: Type-safe database operations
- **MySQL**: Relational database
- **Migrations**: SQL-based migration files

### Validation Layer
- **DTOs**: Data Transfer Objects with class-validator decorators
- **Global Validation Pipe**: Automatic request validation
- **Type Transformation**: Automatic DTO to entity conversion

### Business Logic
- **Service Layer**: All business logic in services
- **Controllers**: Thin layer for HTTP handling only
- **Separation of Concerns**: Clear boundaries between layers

### API Response Format
All responses follow a consistent structure:
```typescript
{
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
```

This format is Flutter-friendly and easy to parse.

## Testing the API

### Create Word Pair
```bash
curl -X POST http://localhost:3000/word-pairs \
  -H "Content-Type: application/json" \
  -d '{
    "word1": "Hello",
    "word2": "World",
    "description": "A greeting pair"
  }'
```

### Get All Word Pairs
```bash
curl http://localhost:3000/word-pairs
```

### Get Word Pair by ID
```bash
curl http://localhost:3000/word-pairs/1
```

### Update Word Pair
```bash
curl -X PATCH http://localhost:3000/word-pairs/1 \
  -H "Content-Type: application/json" \
  -d '{
    "word1": "Hi",
    "word2": "There"
  }'
```

### Delete Word Pair
```bash
curl -X DELETE http://localhost:3000/word-pairs/1
```

## Code Structure

### Module Pattern
Each feature follows NestJS module pattern:
- **Module**: Registers controllers and services
- **Controller**: Handles HTTP requests/responses
- **Service**: Contains business logic
- **Entity**: Sequelize model definition
- **DTOs**: Request/response validation

### Example: Adding a New Feature

1. Create entity in `entities/`
2. Create DTOs in `dto/`
3. Create service with business logic
4. Create controller with endpoints
5. Create module and register in `app.module.ts`
