# nestjs-word-pair

- Framework: NestJS (stable latest)
- Language: TypeScript
- Package manager: npm
- Full strict TypeScript
- No tolerance implicit typing
- Sequelize (official NestJS integration)
- MySQL driver
- Validation
- Env config
- Mandatory Folder Structure:
src/
├── app.module.ts
├── main.ts
├── config/
│   ├── database.config.ts
│   └── env.validation.ts
├── modules/
│   └── wordpair/
│       ├── wordpair.module.ts
│       ├── wordpair.controller.ts
│       ├── wordpair.service.ts
│       ├── dto/
│       │   ├── create-wordpair.dto.ts
│       │   └── wordpair-response.dto.ts
│       └── models/
│           └── wordpair.model.ts

- Semua credential via .env
- Tidak ada hardcoded value

- Gunakan SequelizeModule.forRootAsync
- Auto-load models
- Logging aktif
- synchronize: false

- Gunakan decorator sequelize-typescript
- Setiap field typed eksplisit
- Tidak boleh any

- Semua input via DTO
- Validasi ketat
- No nullable tanpa alasan

- whitelist ON
- forbidNonWhitelisted ON
- transform ON

- Gunakan @InjectModel
- Tidak boleh akses Model langsung di Controller

POST   /wordpairs
GET    /wordpairs
GET    /wordpairs/random
POST    → simpan pasangan kata
GET     → ambil semua pasangan
RANDOM  → ambil 1 data random

- Gunakan ORDER BY RAND()
- Limit 1

- Jangan return model mentah
- Gunakan Response DTO
- JSON konsisten (camelCase)
- Example Response: 
{
  "id": 1,
  "wordA": "fast",
  "wordB": "car"
}

- Gunakan HttpException
- Jangan throw Error biasa
- Semua service function return type eksplisit

- charset: utf8mb4
- index pada wordA dan wordB
- engine: InnoDB

- strict typing
- DTO everywhere
- service-only business logic

