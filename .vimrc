" vundle stuff
set nocompatible              " be iMproved, required
filetype off                  " required
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'dyng/ctrlsf.vim'
Plugin 'Xuyuanp/nerdtree-git-plugin'
Plugin 'pangloss/vim-javascript'
Plugin 'vim-syntastic/syntastic'
Plugin 'mxw/vim-jsx'
Plugin 'vim-airline/vim-airline'
Plugin 'tpope/vim-fugitive'
call vundle#end()

" ctrlp ignore
if executable('ag')
  " Use The Silver Searcher https://github.com/ggreer/the_silver_searcher
  set grepprg=ag\ --nogroup\ --nocolor
  " Use ag in CtrlP for listing files. Lightning fast, respects .gitignore
  " and .agignore. Ignores hidden files by default.
  let g:ctrlp_user_command = 'ag %s -l --nocolor -f -g ""'
else
  "ctrl+p ignore files in .gitignore
  let g:ctrlp_user_command = ['.git', 'cd %s && git ls-files . -co --exclude-standard', 'find %s -type f']
endif

" ctrlsf
:nmap     <C-F> <Plug>CtrlSFCwordPath
:vmap     <C-F> <Plug>CtrlSFVwordPath

" vim airline
set laststatus=2
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#fnamemod = ':t'

" syntastic
let g:syntastic_javascript_checkers = ['eslint']
let local_eslint = finddir('node_modules', '.;') . '/.bin/eslint'
if matchstr(local_eslint, "^\/\\w") == ''
    let local_eslint = getcwd() . "/" . local_eslint
endif
if executable(local_eslint)
    let g:syntastic_javascript_eslint_exec = local_eslint
endif

" vim buffers
set hidden

" in osx make clipboard work with system clipboard
set clipboard=unnamed

" Trigger autoread when changing buffers or coming back to vim.
au FocusGained,BufEnter * :silent! !

" map leader
let mapleader=" "

" pressing shift is hard work
:nmap ; :

" pressing escape is insane 
:inoremap jk <esc>

" change movement to respect wrapping
:noremap j gj
:noremap k gk

" tab
set expandtab " insert spaces instead of tabs
set softtabstop=4 
set shiftwidth=4

" indentation
filetype plugin indent on
set autoindent
set backspace=indent,eol,start

" visuals
syntax enable
colorscheme molokai
set background=dark
set number
set colorcolumn=80 "highlight column at 80 chars
" set termguicolors " enable 24bit colors

" Search
set incsearch " incremental search, start searching from first char typed
set hlsearch " highlight search results

" Misc
set showmatch

" vim-jsx plugin
let g:jsx_ext_required = 0

" Shortcut for clearing search
nnoremap <silent> <leader>c :nohlsearch<CR>

"shortcut for saving
noremap <Leader>s :update<CR>

nmap <C-L> :bnext<CR>
nmap <C-H> :bprevious<CR>
nmap <C-W> :bp <BAR> bd #<CR>

" Drink the koolaid!
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>
imap <up> <nop>
imap <down> <nop>
imap <left> <nop>
imap <right> <nop>
