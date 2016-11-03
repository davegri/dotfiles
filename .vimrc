" vundle stuff
set nocompatible              " be iMproved, required
filetype off                  " required
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'Xuyuanp/nerdtree-git-plugin'
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

" in osx make clipboard work with system clipboard
" set clipboard=unnamed
" set autoread

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

" Shortcut for clearing search
nnoremap <silent> <leader>c :nohlsearch<CR>

"shortcut for saving
noremap <Leader>s :update<CR>

" shortcut for global search of word under cursor
nnoremap <Leader>f :Ggrep -F "<C-R><C-W>"

" managing splits with tmux
if exists('$TMUX')
  function! TmuxOrSplitSwitch(wincmd, tmuxdir)
    let previous_winnr = winnr()
    silent! execute "wincmd " . a:wincmd
    if previous_winnr == winnr()
      call system("tmux select-pane -" . a:tmuxdir)
      redraw!
    endif
  endfunction

  let previous_title = substitute(system("tmux display-message -p '#{pane_title}'"), '\n', '', '')
  let &t_ti = "\<Esc>]2;vim\<Esc>\\" . &t_ti
  let &t_te = "\<Esc>]2;". previous_title . "\<Esc>\\" . &t_te

  nnoremap <silent> <C-h> :call TmuxOrSplitSwitch('h', 'L')<cr>
  nnoremap <silent> <C-j> :call TmuxOrSplitSwitch('j', 'D')<cr>
  nnoremap <silent> <C-k> :call TmuxOrSplitSwitch('k', 'U')<cr>
  nnoremap <silent> <C-l> :call TmuxOrSplitSwitch('l', 'R')<cr>
else
  map <C-h> <C-w>h
  map <C-j> <C-w>j
  map <C-k> <C-w>k
  map <C-l> <C-w>l
endif

" Drink the koolaid!
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>
imap <up> <nop>
imap <down> <nop>
imap <left> <nop>
imap <right> <nop>
