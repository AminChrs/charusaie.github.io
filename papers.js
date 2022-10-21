var papers = [
  {
    authors: "M. Vinaroz*, M. Charusaie*, F. Harder, K. Adamczewski, MJ. Park",
    title: "Hermite polynomial features for private data generation",
    pdfurl: "https://proceedings.mlr.press/v162/vinaroz22a.html",
    where: "International Conference of Machine Learning (ICML22)",
	abs: "Kernel mean embedding is a useful tool to compare probability measures. Despite its usefulness, kernel mean embedding considers infinite-dimensional features, which are challenging to handle in the context of differentially private data generation. A recent work, DP-MERF (Harder et al., 2021), proposes to approximate the kernel mean embedding of data distribution using finite-dimensional random features, which yields an analytically tractable sensitivity of approximate kernel mean embedding. However, the required number of random features in DP-MERF is excessively high, often ten thousand to a hundred thousand, which worsens the sensitivity of the approximate kernel mean embedding. To improve the sensitivity, we propose to replace random features with Hermite polynomial features. Unlike the random features, the Hermite polynomial features are ordered, where the features at the low orders contain more information on the distribution than those at the high orders. Hence, a relatively low order of Hermite polynomial features can more accurately approximate the mean embedding of the data distribution compared to a significantly higher number of random features. As a result, the Hermite polynomial features help us to improve the privacy-accuracy trade-off compared to DP-MERF, as demonstrated on several heterogeneous tabular datasets, as well as several image benchmark datasets.",
    links: [
      {
        name: "PMLR",
        url: "https://proceedings.mlr.press/v162/vinaroz22a.html"
      }
    ]
  },
  {
    authors: "M. Charusaie, A. Amini, S. Rini",
    title: "Compressibility Measures for Affinely Singular Random Vectors",
    pdfurl: "https://ieeexplore.ieee.org/abstract/document/9779613/",
    where: "IEEE Transaction on Information Theory",
	abs: "The notion of compressibility of a random measure is a rather general concept which find applications in many contexts from data compression, to signal quantization, and parameter estimation. While compressibility for discrete and continuous measures is generally well understood, the case of discrete-continuous measures is quite subtle. In this paper, we focus on a class of multi-dimensional random measures that have singularities on affine lower-dimensional subsets. We refer to this class of random variables as affinely singular . Affinely singular random vectors naturally arises when considering linear transformation of component-wise independent discrete-continuous random variables. To measure the compressibility of such distributions, we introduce the new notion of dimensional-rate bias (DRB) which is closely related to the entropy and differential entropy in discrete and continuous cases, respectively. Similar to entropy and differential entropy, DRB is useful in evaluating the mutual information between distributions of the aforementioned type. Besides the DRB, we also evaluate the the RID of these distributions. We further provide an upper-bound for the RID of multi-dimensional random measures that are obtained by Lipschitz functions of component-wise independent discrete-continuous random variables (X). The upper-bound is shown to be achievable when the Lipschitz function is AX , where A satisfies SPARK(Am×n)=m+1 (e.g., Vandermonde matrices). When considering discrete-domain moving-average processes with non-Gaussian excitation noise, the above results allow us to evaluate the block-average RID and DRB, as well as to determine a relationship between these parameters and other existing compressibility measures.",
    links: [
      {
        name: "IEEE",
        url: "https://ieeexplore.ieee.org/abstract/document/9779613/"
      }
    ]
  },
  {
    authors: "M. Charusaie, S. Rini, A. Amini",
    title: "On the Compressibility of Affinely Singular Random Vectors",
    pdfurl: "https://ieeexplore.ieee.org/document/9174417",
    where: "International Symposium on Information Theory, 21-26 June 2020",
	abs: "The Renyi's information dimension (RID) of an n-dimensional random vector (RV) is the average dimension of the vector when accounting for non-zero probability measures over lower-dimensional subsets. From an information-theoretical perspective, the RID can be interpreted as a measure of compressibility of a probability distribution. While the RID for continuous and discrete measures is well understood, the case of a discrete-continuous measures presents a number of interesting subtleties. In this paper, we investigate the RID for a class of multi-dimensional discrete-continuous random measures with singularities on affine lower dimensional subsets. This class of RVs, which we term affinely singular, arises from linear transformation of orthogonally singular RVs, that include RVs with singularities on affine subsets parallel to principal axes. We obtain the RID of affinely singular RVs and derive an upper bound for the RID of Lipschitz functions of orthogonally singular RVs. As an application of our results, we consider the example of a moving-average stochastic process with discrete-continuous excitation noise and obtain the RID for samples of this process. We also provide insight about the relationship between the block-average information dimension of the truncated samples, the minimum achievable compression rate, and other measures of compressibility for this process.",
    links: [
      {
        name: "IEEE",
        url: "https://ieeexplore.ieee.org/document/9174417"
      }
    ]
  },
    {
    authors: "M. Charusaie, A. Amini, A. Gohari",
    title: "Correlation Measures for Random Variables Derived from Innovation Processes",
    pdfurl: "",
    where: "(To be submitted)",
	abs: "Studying the statistical dependence of two or several random variables is the basis of statistical estimation and prediction. The correlation measures such as mutual information, Pearson correlation, and maximal correlation are common tools in quantifying the extent to which two random variables are dependent. While such measures are highly informative and computationally simple for jointly Gaussian random variables, it is not the case for general random variables. Infinitely divisible random variables are typical examples that are characterized in the Fourier domain (characteristic functions are known); except for a few special cases, no closed-form expressions are available for the probability density function of such random variables. Besides, these random variables are widely used in the framework of sparse stochastic processes; the latter provides a general statistical formulation for continuous-domain linear models. In this paper, we introduce two new correlation measures tailored for infinitely divisible random variables with symmetric distribution. For the introduced measures, we prove a number of desired properties that are expected from a useful correlation measure. Finally, we employ these measures in an estimation problem; more specifically, we consider the interpolation problem for the family of Levy processes, and compare the outcome with ´ the known results in the literature.",
    links: [
/*       {
        name: "arXiv",
        url: "https://arxiv.org/abs/2001.03884"
      } */
    ]
  },
/*   {
    authors: "B. Balle, J. Bell, A. Gascon, and K. Nissim",
    title: "Differentially Private Summation with Multi-Message Shuffling",
    pdfurl: "https://arxiv.org/pdf/1906.09116",
    where: "ArXiv Preprint (short note), 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1906.09116"
      }
    ]
  },
  {
    authors: "B. Avent, J. Gonzalez, T. Diethe, A. Paleyes, and B. Balle",
    title: "Automatic Discovery of Privacy-Utility Pareto Fronts",
    pdfurl: "https://arxiv.org/pdf/1905.10862",
    where: "ArXiv Preprint, 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1905.10862"
      }
    ]
  },
  {
    authors: "B. Balle, G. Barthe, and M. Gaboardi",
    title: "Privacy Profiles and Amplification by Subsampling",
    pdfurl: "https://journalprivacyconfidentiality.org/index.php/jpc/article/view/726/696",
    where: "Journal of Privacy and Confidentiality, Vol. 10, Num. 1, 2020",
    links: [
        {
          name: "doi",
          url: "https://doi.org/10.29012/jpc.726"
        }
    ]
  },
  {
    authors: "A.-H. Karimi, G. Barthe, B. Balle, and I. Valera",
    title: "Model-Agnostic Counterfactual Explanations for Consequential Decisions",
    pdfurl: "https://arxiv.org/pdf/1905.11190",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2020",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1905.11190"
      }
    ]
  },
  {
    authors: "B. Balle, G. Barthe, M. Gaboardi, J. Hsu, and T. Sato",
    title: "Hypothesis Testing Interpretations and Renyi Differential Privacy",
    pdfurl: "https://arxiv.org/pdf/1905.09982",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2020",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1905.09982"
      }
    ]
  },
  {
    authors: "H. Husain, B. Balle, Z. Cranko, R. Nock",
    title: "Local Differential Privacy for Sampling",
    pdfurl: "#",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2020"
  },
  {
    authors: "K. (Dj) Dvijotham, J. Hayes, B. Balle, Z. Kolter, C. Qin, A. Gyorgy, K. Xiao, S. Gowal, P. Kohli",
    title: "A Framework for Robustness Certification of Smoothed Classifiers Using f-Divergences",
    pdfurl: "https://openreview.net/pdf?id=SJlKrkSFPH",
    where: "International Conference on Learning Representations (ICLR), 2020",
    links: [
      {
        name: "OpenReview",
        url: "https://openreview.net/forum?id=SJlKrkSFPH"
      }
    ]
  },
  {
    authors: "O. Feyisetan, B. Balle, T. Drake, and T. Diethe",
    title: "Privacy- and Utility-Preserving Textual Analysis via Calibrated Multivariate Perturbations",
    pdfurl: "https://arxiv.org/pdf/1910.08902",
    where: "International Conference on Web Search and Data Mining (WSDM), 2020",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1910.08902"
      }
    ]
  },
  {
    authors: "B. Balle, G. Barthe, M. Gaboardi, and J. Geumlek",
    title: "Privacy Amplification by Mixing and Diffusion Mechanisms",
    pdfurl: "https://arxiv.org/pdf/1905.12264",
    where: "Neural Information Processing Systems (NeurIPS), 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1905.12264"
      }
    ]
  },
  {
    authors: "B. Balle, J. Bell, A. Gascon, and K. Nissim",
    title: "The Privacy Blanket of the Shuffle Model",
    pdfurl: "https://arxiv.org/pdf/1903.02837",
    where: "International Cryptology Conference (CRYPTO), 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1903.02837"
      },
      {
        name: "code",
        url: "https://github.com/BorjaBalle/amplification-by-shuffling"
      }
    ]
  },
  {
    authors: "Y.-X. Wang, B. Balle, and S. Kasiviswanathan",
    title: "Subsampled Rényi Differential Privacy and Analytical Moments Accountant",
    pdfurl: "https://arxiv.org/pdf/1808.00087",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1808.00087"
      }
    ],
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Notable Paper Award; Oral Presentation</b>)</i>"
  },
  {
    authors: "B. Balle, P. Panangaden, and D. Precup",
    title: "Singular Value Automata and Approximate Minimization",
    pdfurl: "https://arxiv.org/pdf/1711.05994",
    where: "Mathematical Structures in Computer Science, 2019",
    links: [
      {
        name: "doi",
        url: "https://doi.org/10.1017/S0960129519000094"
      },
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1711.05994"
      }
    ]
  },
  {
    authors: "B. Balle, G. Barthe, and M. Gaboardi",
    title: "Privacy Amplification by Subsampling: Tight Analyses via Couplings and Divergences",
    pdfurl: "https://arxiv.org/pdf/1807.01647",
    where: "Neural Information Processing Systems (NeurIPS), 2018",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1807.01647"
      }
    ]
  },
  {
    authors: "B. Balle and Y.-X. Wang",
    title: "Improving the Gaussian Mechanism for Differential Privacy: Analytical Calibration and Optimal Denoising",
    pdfurl: "https://arxiv.org/pdf/1805.06530",
    where: "International Conference on Machine Learning (ICML), 2018",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1805.06530"
      },
      {
        name: "code",
        url: "https://github.com/BorjaBalle/analytic-gaussian-mechanism"
      }
    ]
  },
  {
    authors: "P. Schoppmann, L. Vogelsang, A. Gascon, and B. Balle",
    title: "Private Nearest Neighbors Classification in Federated Databases",
    pdfurl: "https://eprint.iacr.org/2018/289.pdf",
    where: "Cryptology ePrint Archive, 2018",
    links: [
      {
        name: "ePrint",
        url: "https://eprint.iacr.org/2018/289"
      }
    ]
  },
  {
    authors: "Y. Grinberg, H. Aboutalebi, M. Lyman-Abramovitch, B. Balle, and D. Precup",
    title: "Learning Predictive State Representations from Non-uniform Sampling",
    pdfurl: "#",
    where: "AAAI Conference on Artificial Intelligence (AAAI), 2018",
  },
  {
    authors: "M. Ruffini, G. Rabusseau, and B. Balle",
    title: "Hierarchical Methods of Moments",
    pdfurl: "https://papers.nips.cc/paper/6786-hierarchical-methods-of-moments.pdf",
    where: "Neural Information Processing Systems (NIPS), 2017",
    links: [
      {
        name: "proceedings",
        url: "https://papers.nips.cc/paper/6786-hierarchical-methods-of-moments"
      },
      {
        name: "supplementary",
        url: "https://papers.nips.cc/paper/6786-hierarchical-methods-of-moments-supplemental.zip"
      }
    ]
  },
  {
    authors: "G. Rabusseau, B. Balle, and J. Pineau",
    title: "Multitask Spectral Learning of Weighted Automata",
    pdfurl: "https://papers.nips.cc/paper/6852-multitask-spectral-learning-of-weighted-automata.pdf",
    where: "Neural Information Processing Systems (NIPS), 2017",
    links: [
      {
        name: "proceedings",
        url: "https://papers.nips.cc/paper/6852-multitask-spectral-learning-of-weighted-automata"
      },
      {
        name: "supplementary",
        url: "https://papers.nips.cc/paper/6852-multitask-spectral-learning-of-weighted-automata-supplemental.zip"
      }
    ]
  },
  {
    authors: "B. Balle and O.-A. Maillard",
    title: "Spectral Learning from a Single Trajectory under Finite-State Policies",
    pdfurl: "http://proceedings.mlr.press/v70/balle17a/balle17a.pdf",
    where: "International Conference on Machine Learning (ICML), 2017",
    links: [
      {
        name: "PMLR",
        url: "http://proceedings.mlr.press/v70/balle17a.html"
      },
      {
        name: "supplementary",
        url: "http://proceedings.mlr.press/v70/balle17a/balle17a-supp.pdf"
      }
    ]
  },
  {
    authors: "B. Balle, P. Gourdeau, and P. Panangaden",
    title: "Bisimulation Metrics for Weighted Automata",
    pdfurl: "https://arxiv.org/pdf/1702.08017",
    where: "International Colloquium on Automata, Languages, and Programming (ICALP), 2017",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1702.08017"
      }
    ]
  },
  {
    authors: "A. Gascon, P. Schoppmann, B. Balle, M. Raykova, J. Doerner, S. Zahur, and D. Evans",
    title: "Privacy-Preserving Distributed Linear Regression on High-Dimensional Data",
    pdfurl: "https://www.degruyter.com/downloadpdf/j/popets.2017.2017.issue-4/popets-2017-0053/popets-2017-0053.xml",
    where: "Proceedings on Privacy Enhancing Technologies (PoPETS), 2017",
    links: [
      {
        name: "doi",
        url: "https://doi.org/10.1515/popets-2017-0053"
      }
    ]
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "Generalization Bounds for Learning Weighted Automata",
    pdfurl: "https://arxiv.org/pdf/1610.07883v1",
    where: "Theoretical Computer Science, 2017",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1610.07883"
      },
      {
        name: "doi",
        url: "https://doi.org/10.1016/j.tcs.2017.11.023"
      }
    ]
  },
  {
    authors: "B. Balle, M. Gomrokchi, and D. Precup",
    title: "Differentially Private Policy Evaluation",
    pdfurl: "http://arxiv.org/pdf/1603.02010v1",
    where: "International Conference on Machine Learning (ICML), 2016",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1603.02010"
      }
    ]
  },
  {
    authors: "L. Langer, B. Balle, and D. Precup",
    title: "Learning Multi-Step Predictive State Representations",
    pdfurl: "#",
    where: "International Joint Conference on Artificial Intelligence (IJCAI), 2016",
  },
  {
    authors: "G. Rabusseau, B. Balle, and S. B. Cohen",
    title: "Low-Rank Approximation of Weighted Tree Automata",
    pdfurl: "http://jmlr.org/proceedings/papers/v51/rabusseau16.html",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2016",
    //links: [
    //{ name: "arXiv", url: "http://arxiv.org/abs/1511.01442" }
    //]
  },
  {
    authors: "C. Zhou, B. Balle, and J. Pineau",
    title: "Learning Time Series Models for Pedestrian Motion Prediction",
    pdfurl: "http://www.cs.mcgill.ca/~jpineau/files/zhou-icra16.pdf",
    where: "IEEE International Conference on Robotics and Automation (ICRA), 2016",
    links: [
      {
        name: "code",
        url: "http://www.cs.mcgill.ca/~jpineau/code/zhou-icra16-code.zip"
      }
    ]
  },
  {
    authors: "B. Wang, B. Balle, and J. Pineau",
    title: "Multitask Generalized Eigenvalue Program",
    pdfurl: "#",
    where: "AAAI Conference on Artificial Intelligence (AAAI), 2016",
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "On the Rademacher Complexity of Weighted Automata",
    pdfurl: "#",
    where: "Algorithmic Learning Theory (ALT), 2015",
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "Learning Weighted Automata",
    pdfurl: "papers/cai15.pdf",
    where: "Conference on Algebraic Informatics (CAI), 2015",
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Invited Paper</b>)</i>"
  },
  {
    authors: "P. L. Bacon, B. Balle, and D. Precup",
    title: "Learning and Planning with Timing Information in Markov Decision Processes",
    pdfurl: "papers/uai15.pdf",
    where: "Uncertainty in Artificial Intelligence (UAI), 2015",
  },
  {
    authors: "L. Addario-Berry, B. Balle, and G. Perarnau",
    title: "Diameter and Stationary Distribution of Random r-out Digraphs",
    pdfurl: "http://arxiv.org/pdf/1504.06840v1",
    where: "ArXiv Preprint, 2015",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1504.06840"
      }
    ]
  },
  {
    authors: "B. Balle, P. Panangaden, and D. Precup",
    title: "A Canonical Form for Weighted Automata and Applications to Approximate Minimization",
    pdfurl: "http://arxiv.org/pdf/1501.06841",
    where: "Logic in Computer Science (LICS), 2015",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1501.06841"
      }
    ]
  },
  {
    authors: "B. Balle, W. Hamilton, and J. Pineau",
    title: "Methods of Moments for Learning Stochastic Languages: Unified Presentation and Empirical Comparison",
    pdfurl: "papers/icml14-mom.pdf",
    where: "International Conference on Machine Learning (ICML), 2014",
  },
  {
    authors: "A. Quattoni, B. Balle, X. Carreras, and A. Globerson",
    title: "Spectral Regularization for Max-Margin Sequence Tagging",
    pdfurl: "papers/icml14-oom.pdf",
    where: "International Conference on Machine Learning (ICML), 2014",
  },
  {
    authors: "B. Balle, X. Carreras, F. M. Luque, and A. Quattoni",
    title: "Spectral Learning of Weighted Automata: A Forward-Backward Perspective",
    pdfurl: "papers/preprint-bclq13.pdf",
    where: "Machine Learning, Vol. 96, No. 1, 2014",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.1007/s10994-013-5416-x"
      }
    ]
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Adaptively Learning Probabilistic Deterministic Automata from Data Streams",
    pdfurl: "papers/preprint-bcg13.pdf",
    where: "Machine Learning, Vol. 96, No. 1, 2014",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.1007/s10994-013-5408-x"
      }
    ]
  },
  {
    authors: "B. Balle",
    title: "Ergodicity of Random Walks on Random DFA",
    pdfurl: "http://arxiv.org/pdf/1311.6830v1",
    where: "ArXiv Preprint, 2013",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1311.6830"
      }
    ]
  },
  {
    authors: "B. Balle",
    title: "Learning Finite-State Machines: Algorithmic and Statistical Aspects",
    pdfurl: "other/phdthesis.pdf",
    where: "PhD Thesis, 2013",
  },
  {
    authors: "B. Balle, B. Casas, A. Catarineu, R. Gavalà, and D. Manzano-Macho",
    title: "The Architecture of a Churn Prediction System Based on Stream Mining",
    pdfurl: "http://www.lsi.upc.edu/%7Egavalda/ccia2013Churn.pdf",
    where: "International Conference of the Catalan Association of Artificial Intelligence (CCIA), 2013",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.3233/978-1-61499-320-9-157"
      }
    ]
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Learning Probabilistic Automata: A Study In State Distinguishability",
    pdfurl: "papers/tcs13.pdf",
    where: "Theoretical Computer Science, 473:46-60, 2013",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.1016/j.tcs.2012.10.009"
      }
    ]
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "Spectral Learning of General Weighted Automata via Constrained Matrix Completion",
    pdfurl: "papers/nips12.pdf",
    where: "Neural Information Processing Systems (NIPS), 2012",
    links: [
      {
        name: "slides",
        url: "slides/nips12.pdf"
      },
      {
        name: "video",
        url: "http://videolectures.net/nips2012_balle_spectral_learning/"
      }
    ],
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Honorable Mention for the Outstanding Student Paper Award</b>)</i>"
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Bootstrapping and Learning PDFA in Data Streams",
    pdfurl: "papers/icgi12.pdf",
    where: "International Colloquium on Grammatical Inference (ICGI), 2012",
    links: [
      {
        name: "slides",
        url: "slides/icgi12.pdf"
      }
    ],
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Best Student Paper Award</b>)</i>"
  },
  {
    authors: "B. Balle, A. Quattoni, and X. Carreras",
    title: "Local Loss Optimization in Operator Models: A New Insight into Spectral Learning",
    pdfurl: "papers/icml12.pdf",
    where: "International Conference on Machine Learning (ICML), 2012",
    links: [
      {
        name: "slides",
        url: "slides/icml12.pdf"
      },
      {
        name: "video",
        url: "http://techtalks.tv/talks/local-loss-optimization-in-operator-models-a-new-insight-into-spectral-learning/57488/"
      }
    ]
  },
  {
    authors: "F. M. Luque, A. Quattoni, B. Balle, and X. Carreras",
    title: "Spectral Learning for Non-Deterministic Dependency Parsing",
    pdfurl: "papers/eacl12.pdf",
    where: "Conference of the European Chapter of the Association for Computational Linguistics (EACL), 2012",
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Best Paper Award</b>)</i>"
  },
  {
    authors: "B. Balle, A. Quattoni, and X. Carreras",
    title: "A Spectral Learning Algorithm for Finite State Transducers",
    pdfurl: "papers/ecml11.pdf",
    where: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), 2011",
    links: [
      {
        name: "slides",
        url: "slides/ecml11.pdf"
      }
    ]
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "A Lower Bound for Learning Distributions Generated by Probabilistic Automata",
    pdfurl: "papers/alt12.pdf",
    where: "Algorithmic Learning Theory (ALT), 2010"
  },
  /*{
    authors: "B. Balle",
    title: "Implementing Kearns-Vazirani Algorithm for Learning DFA Only with Membership Queries",
    pdfurl: "papers/zulu10.pdf",
    where: "Zulu Workshop, 2010",
    extra: "<br /> <i style='font-size: 0.9em;'>(The algorithm described in this paper finished in <b>2nd place</b> in the <a href='http://labh-curien.univ-st-etienne.fr/zulu/'>Zulu Competition</a>)</i>"
  },*/
 /*  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Learning PDFA with Asynchronous Transitions",
    pdfurl: "papers/icgi10.pdf",
    where: "International Colloquium on Grammatical Inference (ICGI), 2010"
  },
  {
    authors: "B. Balle, E. Ventura, and J.M. Fuertes",
    title: "An Algorithm to Design Prescribed Length Codes for Single-Tracked Shaft Encoders",
    pdfurl: "papers/icm09.pdf",
    where: "IEEE International Conference on Mechatronics (ICM), 2009",
    links: [
      {
        name: "slides",
        url: "slides/icm09.pdf"
      }
    ]
  },
  {
    authors: "J.M. Fuertes, B. Balle, and E. Ventura",
    title: "Absolute-Type Shaft Encoding Using LFSR Sequences With a Prescribed Length",
    pdfurl: "papers/tim08.pdf",
    where: "IEEE Transactions on Instrumentation and Measurement, Vol.  57, No. 5, 2008"
  } */ 
];
