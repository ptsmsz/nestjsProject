import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
@ApiTags('Boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('/')
    @ApiOperation({ summary: '게시판 목록 조회 API', description: '게시판 목록 조회를 제공한다.' })
    getAllBoard(): Board[]{
        return  this.boardsService.getAllBoards();
    }

    @Post()
    @ApiOperation({ summary: '게시판 등록 API', description: '게시판 글쓰기를 제공한다.' })
    createBoard(
        @Body('title') title:string,
        @Body('description') description:string
    ):Board{
        return this.boardsService.createBoard(title, description);
    }
}
