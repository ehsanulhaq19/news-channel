<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\NewsOrg;
use App\Services\TheGuardian;
use App\Services\NewYorkTimes;
use App\Repository\ArticleRepository;

class FetchArticlesFromSources extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:articles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch articles from different sources and save them in database';

    /**
     * The NewsOrg instance.
     *
     * @var NewsOrg
     */
    private NewsOrg $newsOrg;
    
    /**
     * The TheGuardian instance.
     *
     * @var TheGuardian
     */
    private TheGuardian $theGuardian;

    /**
     * The NewYorkTimes instance.
     *
     * @var NewYorkTimes
     */
    private NewYorkTimes $newYorkTimes;

    /**
     * The ArticleRepository instance.
     *
     * @var ArticleRepository
     */
    private ArticleRepository $articleRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(
        NewsOrg $newsOrg,
        TheGuardian $theGuardian,
        NewYorkTimes $newYorkTimes,
        ArticleRepository $articleRepository
    ) {
        parent::__construct();

        $this->newsOrg = $newsOrg;
        $this->theGuardian = $theGuardian;
        $this->newYorkTimes = $newYorkTimes;
        $this->articleRepository = $articleRepository;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $newsOrgArticles = $this->newsOrg->fetchAllArticles();

        $theGuardianArticles = $this->theGuardian->fetchAllArticles();

        $newYorkTimesArticles = $this->newYorkTimes->fetchAllArticles();

        $articles = array_merge($newsOrgArticles, $theGuardianArticles, $newYorkTimesArticles);
        
        $this->articleRepository->saveArticles($articles);

        return 0;
    }
}
