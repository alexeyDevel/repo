"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        console.error(exception.message);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let errorMessage = 'Internal Server Error';
        switch (exception.code) {
            case 'P2000': {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'Invalid input data';
                break;
            }
            case 'P2001': {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'A required field is missing';
                break;
            }
            case 'P2002': {
                status = common_1.HttpStatus.CONFLICT;
                errorMessage = 'Duplicate entry';
                break;
            }
            case 'P2003': {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'Unique constraint violation';
                break;
            }
            case 'P2004': {
                status = common_1.HttpStatus.NOT_FOUND;
                errorMessage = 'Record not found';
                break;
            }
            case 'P2005': {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'Invalid relation';
                break;
            }
            case 'P2006': {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'Invalid foreign key';
                break;
            }
            case 'P2014': {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'Company with the specified company_id does not exist.';
                break;
            }
            default: {
                status = common_1.HttpStatus.BAD_REQUEST;
                errorMessage = 'Foreign key constraint failed';
                break;
            }
        }
        response.status(status).json({
            statusCode: status,
            message: errorMessage,
        });
    }
};
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaClientExceptionFilter);
//# sourceMappingURL=prisma.filter.js.map