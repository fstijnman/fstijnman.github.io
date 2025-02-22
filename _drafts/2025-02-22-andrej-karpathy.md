# Deep Dive into LLMs like ChatGPT

## Stages

### Pretraining

- Huggingface created a dataset called FineWeb. Major LLM providers, have some equivalent, internally of this dataset.
- We're trying to get ton of text, a huge quantity of high quality documents, with a large diversity.
- 44TB disk space
- Data from CommonCrawl: has indexed 2.7 billion webpages
  - You start with a few seed webpages
  - And you follow all these links
  - Filter URLs, blocklist
  - Save the raw HTML
  - Basic filtering (for instance keep pages with English >65%)
  - PII removal (addresses, social security numbers)

### Tokenization

- The model expects a one dimensional vector of numbers
- UTF8 bits that represent the text

### Neural network training

- Input are sequences of tokens of variable lengths
- Output is prediction of what comes next

left at 00:30
> Training - inference example
>
>
