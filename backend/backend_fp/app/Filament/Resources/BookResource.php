<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Book;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\BookResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\BookResource\RelationManagers;

class BookResource extends Resource
{
    protected static ?string $model = Book::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Title')
                    ->required(),

                TextInput::make('price')
                    ->label('Price')
                    ->required(),

                TextInput::make('author')
                    ->label('Author')
                    ->required(),

                Select::make('category_id')
                    ->relationship('category', 'name'),

                FileUpload::make('image')
                    ->image(),

                TextInput::make('detail')
                    ->label('Detail')
                    ->required(),

                Textarea::make('synopsis')
                    ->label('Synopsis')
                    ->required(),

                Textarea::make('description')
                    ->label('Description')
                    ->required(),

                TextInput::make('format')
                    ->label('Format')
                    ->required(),

                TextInput::make('published')
                    ->label('Published')
                    ->required(),

                TextInput::make('isbn')
                    ->label('ISBN')
                    ->required()
                    ->unique(),

                TextInput::make('language')
                    ->label('Language')
                    ->required(),

                TextInput::make('quantity')
                    ->label('Quantity')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Title'),
                TextColumn::make('price')
                    ->label('Price'),
                TextColumn::make('author')
                    ->label('Author'),
                TextColumn::make('category.name')
                    ->label('Category'),
                TextColumn::make('image')
                    ->label('Image'),
                TextColumn::make('detail')
                    ->label('Detail'),
                TextColumn::make('synopsis')
                    ->label('Synopsis'),
                TextColumn::make('description')
                    ->label('Description'),
                TextColumn::make('format')
                    ->label('Format'),
                TextColumn::make('published')
                    ->label('Published'),
                TextColumn::make('isbn')
                    ->label('ISBN'),
                TextColumn::make('language')
                    ->label('Language'),
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBooks::route('/'),
            'create' => Pages\CreateBook::route('/create'),
            'edit' => Pages\EditBook::route('/{record}/edit'),
        ];
    }
}
