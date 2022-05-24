/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  IRIS: {
    options: {
      objc_class_prefix: "IRIS",
      java_package: "kz.kase.iris.model"
    },
    nested: {
      DealsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "dealsRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "DealsCountRequest",
            id: 2
          },
          dealsRequest: {
            type: "DealsRequest",
            id: 3
          },
          exportRequest: {
            type: "DealsExportRequest",
            id: 4
          }
        }
      },
      DealsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "dealsCountReply",
              "dealsReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          dealsCountReply: {
            type: "DealsCountReply",
            id: 3
          },
          dealsReply: {
            type: "DealsReply",
            id: 4
          },
          exportReply: {
            type: "DealsExportReply",
            id: 5
          }
        }
      },
      OrdersApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "ordersRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "OrdersCountRequest",
            id: 2
          },
          ordersRequest: {
            type: "OrdersRequest",
            id: 3
          },
          exportRequest: {
            type: "OrdersExportRequest",
            id: 4
          }
        }
      },
      OrdersApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "ordersCountReply",
              "ordersReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          ordersCountReply: {
            type: "OrdersCountReply",
            id: 3
          },
          ordersReply: {
            type: "OrdersReply",
            id: 4
          },
          exportReply: {
            type: "OrdersExportReply",
            id: 5
          }
        }
      },
      CurDealsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "dealsRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "CurDealsCountRequest",
            id: 2
          },
          dealsRequest: {
            type: "CurDealsRequest",
            id: 3
          },
          exportRequest: {
            type: "CurDealsExportRequest",
            id: 4
          }
        }
      },
      CurDealsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "dealsCountReply",
              "dealsReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          dealsCountReply: {
            type: "CurDealsCountReply",
            id: 3
          },
          dealsReply: {
            type: "CurDealsReply",
            id: 4
          },
          exportReply: {
            type: "CurDealsExportReply",
            id: 5
          }
        }
      },
      CurOrdersApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "ordersRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "CurOrdersCountRequest",
            id: 2
          },
          ordersRequest: {
            type: "CurOrdersRequest",
            id: 3
          },
          exportRequest: {
            type: "CurOrdersExportRequest",
            id: 4
          }
        }
      },
      CurOrdersApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "ordersCountReply",
              "ordersReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          ordersCountReply: {
            type: "CurOrdersCountReply",
            id: 3
          },
          ordersReply: {
            type: "CurOrdersReply",
            id: 4
          },
          exportReply: {
            type: "CurOrdersExportReply",
            id: 5
          }
        }
      },
      TotalsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "totalsRequest",
              "quotationsRequest",
              "risersFallersRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "TotalsCountRequest",
            id: 2
          },
          totalsRequest: {
            type: "TotalsRequest",
            id: 3
          },
          quotationsRequest: {
            type: "QuotationsRequest",
            id: 4
          },
          risersFallersRequest: {
            type: "RisersFallersRequest",
            id: 5
          }
        }
      },
      TotalsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "totalsCountReply",
              "totalsReply",
              "quotationsReply",
              "risersFallersReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          totalsCountReply: {
            type: "TotalsCountReply",
            id: 3
          },
          totalsReply: {
            type: "TotalsReply",
            id: 4
          },
          quotationsReply: {
            type: "QuotationsReply",
            id: 5
          },
          risersFallersReply: {
            type: "RisersFallersReply",
            id: 6
          }
        }
      },
      CurTotalsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "totalsRequest",
              "quotationsRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "CurTotalsCountRequest",
            id: 2
          },
          totalsRequest: {
            type: "CurTotalsRequest",
            id: 3
          },
          quotationsRequest: {
            type: "CurQuotationsRequest",
            id: 4
          }
        }
      },
      CurTotalsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "totalsCountReply",
              "totalsReply",
              "quotationsReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          totalsCountReply: {
            type: "CurTotalsCountReply",
            id: 3
          },
          totalsReply: {
            type: "CurTotalsReply",
            id: 4
          },
          quotationsReply: {
            type: "CurQuotationsReply",
            id: 5
          }
        }
      },
      OrderbookApiRequest: {
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          request: {
            type: "OrderbookRequest",
            id: 2
          }
        }
      },
      OrderbookApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "orderbookReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          orderbookReply: {
            type: "OrderbookReply",
            id: 3
          }
        }
      },
      CurOrderbookApiRequest: {
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          request: {
            type: "CurOrderbookRequest",
            id: 2
          }
        }
      },
      CurOrderbookApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "orderbookReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          orderbookReply: {
            type: "CurOrderbookReply",
            id: 3
          }
        }
      },
      SecsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "instrumentRequest",
              "instrAttrsRequest",
              "searchRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          instrumentRequest: {
            type: "InstrumentsRequest",
            id: 2
          },
          instrAttrsRequest: {
            type: "InstrAttrsRequest",
            id: 3
          },
          searchRequest: {
            type: "SearchInstrumentsRequest",
            id: 4
          }
        }
      },
      SecsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "instrumentReply",
              "instrAttrsReply",
              "searchReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          instrumentReply: {
            type: "InstrumentsReply",
            id: 3
          },
          instrAttrsReply: {
            type: "InstrAttrsReply",
            id: 4
          },
          searchReply: {
            type: "SearchInstrumentsReply",
            id: 5
          }
        }
      },
      IssuersApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "issuersRequest",
              "issuerAttrsRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          issuersRequest: {
            type: "IssuersRequest",
            id: 2
          },
          issuerAttrsRequest: {
            type: "IssuerAttrsRequest",
            id: 3
          }
        }
      },
      IssuersApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "issuersReply",
              "issuerAttrsReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          issuersReply: {
            type: "IssuersReply",
            id: 3
          },
          issuerAttrsReply: {
            type: "IssuerAttrsReply",
            id: 4
          }
        }
      },
      NewsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "newsRequest",
              "bodyRequest",
              "refsRequest",
              "filesRequest",
              "fileBodyRequest",
              "fullInfoRequest",
              "newsusersAddRequest",
              "newsusersDeleteRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "NewsCountRequest",
            id: 2
          },
          newsRequest: {
            type: "NewsRequest",
            id: 3
          },
          bodyRequest: {
            type: "NewsBodyRequest",
            id: 4
          },
          refsRequest: {
            type: "NewsRefsRequest",
            id: 5
          },
          filesRequest: {
            type: "FilesRequest",
            id: 6
          },
          fileBodyRequest: {
            type: "FileBodyRequest",
            id: 7
          },
          fullInfoRequest: {
            type: "FullNewsInfoRequest",
            id: 8
          },
          newsusersAddRequest: {
            type: "NewsUsersAddRequest",
            id: 9
          },
          newsusersDeleteRequest: {
            type: "NewsUsersDeleteRequest",
            id: 10
          }
        }
      },
      NewsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "newsCountReply",
              "newsReply",
              "bodyReply",
              "refsReply",
              "filesReply",
              "fileBodyReply",
              "fullInfoReply",
              "newsusersAddReply",
              "newsusersDeleteReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          newsCountReply: {
            type: "NewsCountReply",
            id: 3
          },
          newsReply: {
            type: "NewsReply",
            id: 4
          },
          bodyReply: {
            type: "NewsBodyReply",
            id: 5
          },
          refsReply: {
            type: "NewsRefsReply",
            id: 6
          },
          filesReply: {
            type: "FilesReply",
            id: 7
          },
          fileBodyReply: {
            type: "FileBodyReply",
            id: 8
          },
          fullInfoReply: {
            type: "FullNewsInfoReply",
            id: 9
          },
          newsusersAddReply: {
            type: "NewsUsersAddReply",
            id: 10
          },
          newsusersDeleteReply: {
            type: "NewsUsersDeleteReply",
            id: 11
          }
        }
      },
      GraphApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "graphRequest",
              "heatmapRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          graphRequest: {
            type: "GraphRequest",
            id: 2
          },
          heatmapRequest: {
            type: "HeatmapRequest",
            id: 3
          }
        }
      },
      GraphApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "graphReply",
              "heatmapReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          graphReply: {
            type: "GraphReply",
            id: 3
          },
          heatmapReply: {
            type: "HeatmapReply",
            id: 4
          }
        }
      },
      CurGraphApiRequest: {
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          request: {
            type: "CurGraphRequest",
            id: 2
          }
        }
      },
      CurGraphApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "graphReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          graphReply: {
            type: "CurGraphReply",
            id: 3
          }
        }
      },
      RepoApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "repoRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "RepoCountRequest",
            id: 2
          },
          repoRequest: {
            type: "RepoRequest",
            id: 3
          },
          exportRequest: {
            type: "RepoExportRequest",
            id: 4
          }
        }
      },
      RepoApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "repoCountReply",
              "repoReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          repoCountReply: {
            type: "RepoCountReply",
            id: 3
          },
          repoReply: {
            type: "RepoReply",
            id: 4
          },
          exportReply: {
            type: "RepoExportReply",
            id: 5
          }
        }
      },
      RepoOrdersApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "repoCountRequest",
              "repoOrdersRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          repoCountRequest: {
            type: "RepoOrdersCountRequest",
            id: 2
          },
          repoOrdersRequest: {
            type: "RepoOrdersRequest",
            id: 3
          },
          exportRequest: {
            type: "RepoOrdersExportRequest",
            id: 4
          }
        }
      },
      RepoOrdersApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "repoOrdersCountReply",
              "repoOrdersReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          repoOrdersCountReply: {
            type: "RepoOrdersCountReply",
            id: 3
          },
          repoOrdersReply: {
            type: "RepoOrdersReply",
            id: 4
          },
          exportReply: {
            type: "RepoOrdersExportReply",
            id: 5
          }
        }
      },
      IndicatorsApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "countRequest",
              "indicatorsRequest",
              "graphRequest",
              "quotesRequest",
              "changeRequest",
              "exportRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          countRequest: {
            type: "IndicatorsCountRequest",
            id: 2
          },
          indicatorsRequest: {
            type: "IndicatorsRequest",
            id: 3
          },
          graphRequest: {
            type: "IndGraphRequest",
            id: 4
          },
          quotesRequest: {
            type: "IndQuotesRequest",
            id: 5
          },
          changeRequest: {
            type: "IndChangeRequest",
            id: 6
          },
          exportRequest: {
            type: "IndicatorsExportRequest",
            id: 7
          }
        }
      },
      IndicatorsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "indicatorsCountReply",
              "indicatorsReply",
              "graphReply",
              "quotesReply",
              "changeReply",
              "exportReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          indicatorsCountReply: {
            type: "IndicatorsCountReply",
            id: 3
          },
          indicatorsReply: {
            type: "IndicatorsReply",
            id: 4
          },
          graphReply: {
            type: "IndGraphReply",
            id: 5
          },
          quotesReply: {
            type: "IndQuotesReply",
            id: 6
          },
          changeReply: {
            type: "IndChangeReply",
            id: 7
          },
          exportReply: {
            type: "IndicatorsExportReply",
            id: 8
          }
        }
      },
      ActualListsApiRequest: {
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          }
        }
      },
      ActualListsReply: {
        fields: {
          mainSharesIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          },
          mainCurIds: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          actualCurIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          indicatorGroups: {
            rule: "repeated",
            type: "IndicatorsGroup",
            id: 4
          },
          hideEmptySections: {
            type: "bool",
            id: 5
          }
        }
      },
      ActualListsApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "actualListsReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          actualListsReply: {
            type: "ActualListsReply",
            id: 3
          }
        }
      },
      OpenInfoApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "userRegRequest",
              "resetPwdRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          userRegRequest: {
            type: "UserRegRequest",
            id: 2
          },
          resetPwdRequest: {
            type: "ResetPwdRequest",
            id: 3
          }
        }
      },
      OpenInfoApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "userRegReply",
              "resetPwdReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          userRegReply: {
            type: "UserRegReply",
            id: 3
          },
          resetPwdReply: {
            type: "ResetPwdReply",
            id: 4
          }
        }
      },
      InfoApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "actualListsRequest",
              "poolsListRequest",
              "poolQuestionsRequest",
              "poolAnswersRequest",
              "changePwdRequest",
              "boardsRequest",
              "userInfoRequest",
              "userFeedbackRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          actualListsRequest: {
            type: "MainListsRequest",
            id: 2
          },
          poolsListRequest: {
            type: "PoolsListRequest",
            id: 3
          },
          poolQuestionsRequest: {
            type: "PoolQuestionsRequest",
            id: 4
          },
          poolAnswersRequest: {
            type: "PoolAnswersRequest",
            id: 5
          },
          changePwdRequest: {
            type: "ChangePwdRequest",
            id: 6
          },
          boardsRequest: {
            type: "BoardsRequest",
            id: 7
          },
          userInfoRequest: {
            type: "UserInfoRequest",
            id: 8
          },
          userFeedbackRequest: {
            type: "UserFeedbackRequest",
            id: 9
          }
        }
      },
      InfoApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "actualListsReply",
              "poolsListReply",
              "poolQuestionsReply",
              "poolAnswersReply",
              "changePwdReply",
              "boardsReply",
              "userInfoReply",
              "userFeedbackReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          actualListsReply: {
            type: "MainListsReply",
            id: 3
          },
          poolsListReply: {
            type: "PoolsListReply",
            id: 4
          },
          poolQuestionsReply: {
            type: "PoolQuestionsReply",
            id: 5
          },
          poolAnswersReply: {
            type: "PoolAnswersReply",
            id: 6
          },
          changePwdReply: {
            type: "ChangePwdReply",
            id: 7
          },
          boardsReply: {
            type: "BoardsReply",
            id: 8
          },
          userInfoReply: {
            type: "UserInfoReply",
            id: 9
          },
          userFeedbackReply: {
            type: "UserFeedbackReply",
            id: 10
          }
        }
      },
      WatchlistApiRequest: {
        oneofs: {
          request: {
            oneof: [
              "searchRequest",
              "addRequest",
              "delRequest",
              "watchlistRequest"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          searchRequest: {
            type: "WatchlistSearchRequest",
            id: 2
          },
          addRequest: {
            type: "WatchlistAddRequest",
            id: 3
          },
          delRequest: {
            type: "WatchlistDelRequest",
            id: 4
          },
          watchlistRequest: {
            type: "WatchlistRequest",
            id: 5
          }
        }
      },
      WatchlistApiReply: {
        oneofs: {
          replay: {
            oneof: [
              "errorMessage",
              "searchReply",
              "addReply",
              "delReply",
              "watchlistReply"
            ]
          }
        },
        fields: {
          serialNum: {
            type: "int64",
            id: 1
          },
          errorMessage: {
            type: "ErrorMessage",
            id: 2
          },
          searchReply: {
            type: "WatchlistSearchReply",
            id: 3
          },
          addReply: {
            type: "WatchlistAddReply",
            id: 4
          },
          delReply: {
            type: "WatchlistDelReply",
            id: 5
          },
          watchlistReply: {
            type: "WatchlistReply",
            id: 6
          }
        }
      },
      Date: {
        fields: {
          day: {
            type: "int32",
            id: 1
          },
          month: {
            type: "int32",
            id: 2
          },
          year: {
            type: "int32",
            id: 3
          }
        }
      },
      Time: {
        fields: {
          hour: {
            type: "int32",
            id: 1
          },
          min: {
            type: "int32",
            id: 2
          },
          sec: {
            type: "int32",
            id: 3
          }
        }
      },
      DateTime: {
        fields: {
          date: {
            type: "Date",
            id: 1
          },
          time: {
            type: "Time",
            id: 2
          }
        }
      },
      DatePeriod: {
        fields: {
          begDate: {
            type: "Date",
            id: 1
          },
          endDate: {
            type: "Date",
            id: 2
          }
        }
      },
      Week: {
        fields: {
          week: {
            type: "int32",
            id: 1
          },
          year: {
            type: "int32",
            id: 2
          }
        }
      },
      WeekPeriod: {
        fields: {
          begWeek: {
            type: "Week",
            id: 1
          },
          endWeek: {
            type: "Week",
            id: 2
          }
        }
      },
      Month: {
        fields: {
          month: {
            type: "int32",
            id: 1
          },
          year: {
            type: "int32",
            id: 2
          }
        }
      },
      MonthPeriod: {
        fields: {
          begMonth: {
            type: "Month",
            id: 1
          },
          endMonth: {
            type: "Month",
            id: 2
          }
        }
      },
      Quarter: {
        fields: {
          quarter: {
            type: "int32",
            id: 1
          },
          year: {
            type: "int32",
            id: 2
          }
        }
      },
      QuarterPeriod: {
        fields: {
          begQuarter: {
            type: "Quarter",
            id: 1
          },
          endQuarter: {
            type: "Quarter",
            id: 2
          }
        }
      },
      Year: {
        fields: {
          year: {
            type: "int32",
            id: 1
          }
        }
      },
      YearPeriod: {
        fields: {
          begYear: {
            type: "Year",
            id: 1
          },
          endYear: {
            type: "Year",
            id: 2
          }
        }
      },
      TotalsPeriod: {
        oneofs: {
          interval: {
            oneof: [
              "day",
              "week",
              "month",
              "quarter",
              "year",
              "dayPeriod",
              "weekPeriod",
              "monthPeriod",
              "quarterPeriod",
              "yearPeriod"
            ]
          }
        },
        fields: {
          day: {
            type: "Date",
            id: 1
          },
          week: {
            type: "Week",
            id: 2
          },
          month: {
            type: "Month",
            id: 3
          },
          quarter: {
            type: "Quarter",
            id: 4
          },
          year: {
            type: "Year",
            id: 5
          },
          dayPeriod: {
            type: "DatePeriod",
            id: 6
          },
          weekPeriod: {
            type: "WeekPeriod",
            id: 7
          },
          monthPeriod: {
            type: "MonthPeriod",
            id: 8
          },
          quarterPeriod: {
            type: "QuarterPeriod",
            id: 9
          },
          yearPeriod: {
            type: "YearPeriod",
            id: 10
          }
        }
      },
      Decimal: {
        fields: {
          value: {
            type: "string",
            id: 1
          }
        }
      },
      DecimalRange: {
        fields: {
          beg: {
            type: "Decimal",
            id: 1
          },
          begInclusive: {
            type: "bool",
            id: 2
          },
          end: {
            type: "Decimal",
            id: 3
          },
          endInclusive: {
            type: "bool",
            id: 4
          }
        }
      },
      Ohlc: {
        fields: {
          open: {
            type: "Decimal",
            id: 1
          },
          high: {
            type: "Decimal",
            id: 2
          },
          low: {
            type: "Decimal",
            id: 3
          },
          close: {
            type: "Decimal",
            id: 4
          },
          closeTime: {
            type: "DateTime",
            id: 5
          },
          wa: {
            type: "Decimal",
            id: 6
          },
          trend: {
            type: "Decimal",
            id: 7
          },
          trendPs: {
            type: "Decimal",
            id: 8
          },
          trendTime: {
            type: "DateTime",
            id: 9
          }
        }
      },
      GraphOhlc: {
        fields: {
          open: {
            type: "double",
            id: 1
          },
          high: {
            type: "double",
            id: 2
          },
          low: {
            type: "double",
            id: 3
          },
          close: {
            type: "double",
            id: 4
          },
          volume: {
            type: "double",
            id: 5
          },
          closeTime: {
            type: "DateTime",
            id: 6
          }
        }
      },
      GraphIntervalType: {
        values: {
          GIT_5_MIN: 0,
          GIT_15_MIN: 1,
          GIT_30_MIN: 2,
          GIT_HOUR: 3,
          GIT_DAY: 4,
          GIT_WEEK: 5,
          GIT_MONTH: 6
        }
      },
      Range: {
        fields: {
          first: {
            type: "int32",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          }
        }
      },
      EventType: {
        values: {
          NEW: 0,
          UPDATE: 2,
          DELETE: 3
        }
      },
      Language: {
        values: {
          RU: 0,
          EN: 1,
          KZ: 2
        }
      },
      MarketSector: {
        values: {
          PRIMARY: 0,
          SECONDARY: 1,
          SBS_SECTOR: 2,
          OFFERING: 3,
          REPURCHASE: 4
        }
      },
      OrderDirection: {
        values: {
          BUY: 0,
          SELL: 1
        }
      },
      OrderStatus: {
        values: {
          ACTIVE: 0,
          PARTIALLY: 1,
          FULLY: 2,
          CANCELED: 3
        }
      },
      PriceType: {
        values: {
          PT_MONEY: 0,
          PT_CLEAR: 1,
          PT_DISCOUNT: 2,
          PT_SPREAD_BP: 3,
          PT_SPREAD_PR: 4,
          PT_YIELD: 5,
          PT_BP: 6,
          PT_OTHER: 7
        }
      },
      CouponInfo: {
        fields: {
          rate: {
            type: "Decimal",
            id: 1
          },
          minRate: {
            type: "Decimal",
            id: 2
          },
          maxRate: {
            type: "Decimal",
            id: 3
          },
          maturity: {
            type: "Date",
            id: 4
          },
          freq: {
            type: "int32",
            id: 5
          },
          fixedMargin: {
            type: "Decimal",
            id: 6
          }
        }
      },
      Orderbook: {
        fields: {
          direction: {
            type: "OrderDirection",
            id: 1
          },
          price: {
            type: "Decimal",
            id: 2
          },
          volume: {
            type: "int64",
            id: 3
          }
        }
      },
      HTMLAttrsParams: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          lang: {
            type: "Language",
            id: 2
          }
        }
      },
      ExportFileFormat: {
        values: {
          EFF_XLSX: 0,
          EFF_XML: 1,
          EFF_CSV: 2,
          EFF_JSON: 3
        }
      },
      LeaderType: {
        values: {
          LT_RISER: 0,
          LT_FALLER: 1
        }
      },
      ErrorMessageCode: {
        values: {
          EMC_UNKNOWN: 0,
          EMC_BAD_USER: 1,
          EMC_BAD_REQUEST: 2,
          EMC_BAD_PARAMS: 3,
          EMC_PROC_ERROR: 4
        }
      },
      ErrorMessage: {
        fields: {
          code: {
            type: "ErrorMessageCode",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          }
        }
      },
      MainListsRequest: {
        fields: {
          lang: {
            type: "Language",
            id: 5
          }
        }
      },
      MainListsReply: {
        fields: {
          mainSharesIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          },
          mainCurIds: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          actualCurOpers: {
            rule: "repeated",
            type: "CurOper",
            id: 3
          },
          indicatorGroups: {
            rule: "repeated",
            type: "IndicatorsGroup",
            id: 4
          },
          hideEmptySections: {
            type: "bool",
            id: 5
          },
          languages: {
            rule: "repeated",
            type: "Language",
            id: 6
          },
          apiVersion: {
            type: "string",
            id: 7
          }
        }
      },
      PoolInfo: {
        fields: {
          poolId: {
            type: "int32",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          }
        }
      },
      QuestionType: {
        values: {
          QT_ONE: 0,
          QT_MANY: 1,
          QT_FREE: 2
        }
      },
      AnswerType: {
        values: {
          AT_FIXED: 0,
          AT_FREE: 1
        }
      },
      Answer: {
        fields: {
          answerId: {
            type: "int32",
            id: 1
          },
          type: {
            type: "AnswerType",
            id: 2
          },
          text: {
            type: "string",
            id: 3
          }
        }
      },
      Question: {
        fields: {
          questionId: {
            type: "int32",
            id: 1
          },
          type: {
            type: "QuestionType",
            id: 2
          },
          text: {
            type: "string",
            id: 3
          },
          answers: {
            rule: "repeated",
            type: "Answer",
            id: 4
          }
        }
      },
      PoolsListRequest: {
        fields: {
          lang: {
            type: "Language",
            id: 1
          },
          sectionId: {
            type: "int32",
            id: 2
          }
        }
      },
      PoolsListReply: {
        fields: {
          pools: {
            rule: "repeated",
            type: "PoolInfo",
            id: 1
          }
        }
      },
      PoolQuestionsRequest: {
        fields: {
          poolId: {
            type: "int32",
            id: 1
          },
          lang: {
            type: "Language",
            id: 2
          }
        }
      },
      PoolQuestionsReply: {
        fields: {
          poolId: {
            type: "int32",
            id: 1
          },
          description: {
            type: "string",
            id: 2
          },
          questions: {
            rule: "repeated",
            type: "Question",
            id: 3
          }
        }
      },
      PoolAnswersRequest: {
        fields: {
          poolId: {
            type: "int32",
            id: 1
          },
          answers: {
            rule: "repeated",
            type: "Answer",
            id: 2
          }
        }
      },
      PoolAnswersReply: {
        fields: {
          poolId: {
            type: "int32",
            id: 1
          },
          information: {
            type: "string",
            id: 2
          }
        }
      },
      ChangePwdRequest: {
        fields: {
          newPassword: {
            type: "string",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      ChangePwdReply: {
        fields: {
          ok: {
            type: "bool",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          }
        }
      },
      Board: {
        fields: {
          moexBoardsId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      BoardsRequest: {
        fields: {
          moexBoardsId: {
            type: "string",
            id: 1
          }
        }
      },
      BoardsReply: {
        fields: {
          boards: {
            rule: "repeated",
            type: "Board",
            id: 1
          }
        }
      },
      ProductInfo: {
        fields: {
          productId: {
            type: "int32",
            id: 1
          },
          activated: {
            type: "Date",
            id: 2
          },
          deactivated: {
            type: "Date",
            id: 3
          }
        }
      },
      UserInfo: {
        fields: {
          userId: {
            type: "int32",
            id: 1
          },
          userBlocked: {
            type: "bool",
            id: 2
          },
          userName: {
            type: "string",
            id: 3
          },
          fio: {
            type: "string",
            id: 4
          },
          email: {
            type: "string",
            id: 5
          },
          clientId: {
            type: "int32",
            id: 6
          },
          clientBlocked: {
            type: "bool",
            id: 7
          },
          clientName: {
            type: "string",
            id: 8
          },
          address: {
            type: "string",
            id: 9
          },
          tel: {
            type: "string",
            id: 10
          }
        }
      },
      UserInfoRequest: {
        fields: {
          includeProductsInfo: {
            type: "bool",
            id: 1
          }
        }
      },
      UserInfoReply: {
        fields: {
          userInfo: {
            type: "UserInfo",
            id: 1
          },
          products: {
            rule: "repeated",
            type: "ProductInfo",
            id: 2
          }
        }
      },
      UserFeedbackRequest: {
        fields: {
          fio: {
            type: "string",
            id: 1
          },
          email: {
            type: "string",
            id: 2
          },
          tel: {
            type: "string",
            id: 3
          },
          message: {
            type: "string",
            id: 4
          },
          lang: {
            type: "Language",
            id: 5
          }
        }
      },
      UserFeedbackReply: {
        fields: {
          ok: {
            type: "bool",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          }
        }
      },
      CurOper: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          instrumentCode: {
            type: "string",
            id: 2
          },
          description: {
            type: "string",
            id: 3
          }
        }
      },
      IndicatorInGroup: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          realtime: {
            type: "bool",
            id: 3
          }
        }
      },
      IndicatorsGroup: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          indicators: {
            rule: "repeated",
            type: "IndicatorInGroup",
            id: 2
          }
        }
      },
      Indicator: {
        fields: {
          indicatorId: {
            type: "int32",
            id: 1
          },
          valueTime: {
            type: "DateTime",
            id: 2
          },
          typeId: {
            type: "int32",
            id: 3
          },
          value: {
            type: "Decimal",
            id: 4
          },
          version: {
            type: "int64",
            id: 5
          },
          trendValue: {
            type: "Decimal",
            id: 6
          },
          trendTime: {
            type: "DateTime",
            id: 7
          },
          dayOpen: {
            type: "Decimal",
            id: 8
          },
          dayMin: {
            type: "Decimal",
            id: 9
          },
          dayMax: {
            type: "Decimal",
            id: 10
          },
          yearMin: {
            type: "Decimal",
            id: 11
          },
          yearMax: {
            type: "Decimal",
            id: 12
          },
          min: {
            type: "Decimal",
            id: 13
          },
          max: {
            type: "Decimal",
            id: 14
          }
        }
      },
      IndicatorsSortField: {
        values: {
          ISF_VALUE_TIME: 0,
          ISF_TYPE: 1,
          ISF_VALUE: 2,
          ISF_VERSION: 3,
          ISF_ID: 4
        }
      },
      ShortIndicatorInfo: {
        fields: {
          indicatorId: {
            type: "int32",
            id: 1
          },
          valueTime: {
            type: "DateTime",
            id: 2
          },
          typeId: {
            type: "int32",
            id: 3
          },
          eventType: {
            type: "EventType",
            id: 4
          }
        }
      },
      IndicatorsFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          typeIds: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          versionFrom: {
            type: "int64",
            id: 3
          },
          indicatorIds: {
            rule: "repeated",
            type: "int32",
            id: 4
          }
        }
      },
      IndicatorsSortRecord: {
        fields: {
          field: {
            type: "IndicatorsSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      IndicatorsCountRequest: {
        fields: {
          filter: {
            type: "IndicatorsFilter",
            id: 1
          }
        }
      },
      IndicatorsCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      IndicatorsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "IndicatorsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "IndicatorsSortRecord",
            id: 4
          }
        }
      },
      IndicatorsReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          indicators: {
            rule: "repeated",
            type: "Indicator",
            id: 2
          }
        }
      },
      IndicatorsUpdate: {
        fields: {
          indicators: {
            rule: "repeated",
            type: "ShortIndicatorInfo",
            id: 1
          }
        }
      },
      IndGraphRequest: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          period: {
            type: "TotalsPeriod",
            id: 2
          },
          needEmptyIntervals: {
            type: "bool",
            id: 3
          }
        }
      },
      IndGraphReply: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          period: {
            type: "TotalsPeriod",
            id: 2
          },
          interval: {
            type: "GraphIntervalType",
            id: 3
          },
          ohlc: {
            rule: "repeated",
            type: "GraphOhlc",
            id: 4
          }
        }
      },
      IndQuotesRequest: {
        fields: {
          typeIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        }
      },
      IndQuotesReply: {
        fields: {
          indicators: {
            rule: "repeated",
            type: "Indicator",
            id: 1
          }
        }
      },
      IndChangeRequest: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          requestDate: {
            type: "Date",
            id: 2
          }
        }
      },
      IndChangeReply: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          lastTime: {
            type: "DateTime",
            id: 2
          },
          lastValue: {
            type: "Decimal",
            id: 3
          },
          dayValue: {
            type: "Decimal",
            id: 4
          },
          weekValue: {
            type: "Decimal",
            id: 5
          },
          monthValue: {
            type: "Decimal",
            id: 6
          },
          quarterValue: {
            type: "Decimal",
            id: 7
          },
          halfYearValue: {
            type: "Decimal",
            id: 8
          },
          yearValue: {
            type: "Decimal",
            id: 9
          }
        }
      },
      IndicatorsExportRequest: {
        fields: {
          filter: {
            type: "IndicatorsFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "IndicatorsSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      IndicatorsExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      SecType: {
        values: {
          SHARES: 0,
          BONDS: 1,
          SBS: 2,
          UNIT: 3,
          FUTURES: 4,
          ETF: 5,
          GDR: 7
        }
      },
      TradeArea: {
        values: {
          KASE: 0,
          RFCA: 1
        }
      },
      SecurityRecordStatus: {
        values: {
          SRS_ACTIVE: 0,
          SRS_HISTORY: 1,
          SRS_DELETED: 2
        }
      },
      GovernmentSelector: {
        values: {
          GS_ALL: 0,
          GS_GOVERNMENT: 1,
          GS_CORPORATE: 2
        }
      },
      Security: {
        fields: {
          securityId: {
            type: "int32",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          status: {
            type: "SecurityRecordStatus",
            id: 3
          },
          type: {
            type: "SecType",
            id: 4
          },
          government: {
            type: "bool",
            id: 5
          },
          instruments: {
            rule: "repeated",
            type: "int32",
            id: 6
          },
          version: {
            type: "int64",
            id: 7
          }
        }
      },
      Instrument: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          securityId: {
            type: "int32",
            id: 2
          },
          code: {
            type: "string",
            id: 3
          },
          status: {
            type: "SecurityRecordStatus",
            id: 4
          },
          type: {
            type: "SecType",
            id: 5
          },
          tradeArea: {
            type: "TradeArea",
            id: 6
          },
          government: {
            type: "bool",
            id: 7
          },
          issuerInfo: {
            type: "Issuer",
            id: 8
          },
          version: {
            type: "int64",
            id: 9
          }
        }
      },
      InstrumentsFilter: {
        fields: {
          codes: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          isin: {
            type: "string",
            id: 2
          },
          ids: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          status: {
            rule: "repeated",
            type: "SecurityRecordStatus",
            id: 4
          },
          secType: {
            rule: "repeated",
            type: "SecType",
            id: 5
          },
          government: {
            type: "GovernmentSelector",
            id: 6
          },
          tradeArea: {
            type: "TradeArea",
            id: 7
          },
          issuerId: {
            type: "int32",
            id: 8
          },
          version: {
            type: "int64",
            id: 9
          },
          indexKase: {
            type: "bool",
            id: 10
          }
        }
      },
      InstrumentsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "InstrumentsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          includeIssuerInfo: {
            type: "bool",
            id: 4
          },
          lang: {
            type: "Language",
            id: 5
          }
        }
      },
      InstrumentsReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          instruments: {
            rule: "repeated",
            type: "Instrument",
            id: 2
          }
        }
      },
      InstrAttrsRequest: {
        oneofs: {
          params: {
            oneof: [
              "html"
            ]
          }
        },
        fields: {
          html: {
            type: "HTMLAttrsParams",
            id: 1
          }
        }
      },
      InstrAttrsReply: {
        oneofs: {
          attrs: {
            oneof: [
              "html"
            ]
          }
        },
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          html: {
            type: "string",
            id: 2
          }
        }
      },
      SearchInstrumentsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          searchQuery: {
            type: "string",
            id: 1
          },
          shares: {
            type: "bool",
            id: 2
          },
          bonds: {
            type: "bool",
            id: 3
          },
          government: {
            type: "bool",
            id: 4
          },
          includeIssuerInfo: {
            type: "bool",
            id: 5
          },
          range: {
            type: "Range",
            id: 6
          },
          bandle: {
            type: "int32",
            id: 7
          },
          lang: {
            type: "Language",
            id: 8
          }
        }
      },
      SearchInstrumentsReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          instruments: {
            rule: "repeated",
            type: "Instrument",
            id: 2
          }
        }
      },
      IssuerRecordStatus: {
        values: {
          IRS_ACTIVE: 0,
          IRS_HISTORY: 1
        }
      },
      Issuer: {
        fields: {
          issuerId: {
            type: "int32",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          status: {
            type: "IssuerRecordStatus",
            id: 3
          },
          name: {
            type: "string",
            id: 4
          },
          instrumentIds: {
            rule: "repeated",
            type: "int32",
            id: 5
          },
          version: {
            type: "int64",
            id: 6
          }
        }
      },
      IssuersFilter: {
        fields: {
          codes: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          names: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          isin: {
            type: "string",
            id: 3
          },
          ids: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          status: {
            rule: "repeated",
            type: "IssuerRecordStatus",
            id: 5
          },
          version: {
            type: "int64",
            id: 6
          }
        }
      },
      IssuersRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "IssuersFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          includeSecIds: {
            type: "bool",
            id: 4
          },
          lang: {
            type: "Language",
            id: 5
          }
        }
      },
      IssuersReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          issuers: {
            rule: "repeated",
            type: "Issuer",
            id: 2
          }
        }
      },
      IssuerAttrsRequest: {
        oneofs: {
          params: {
            oneof: [
              "html"
            ]
          }
        },
        fields: {
          html: {
            type: "HTMLAttrsParams",
            id: 1
          }
        }
      },
      IssuerAttrsReply: {
        oneofs: {
          attrs: {
            oneof: [
              "html"
            ]
          }
        },
        fields: {
          issuerId: {
            type: "int32",
            id: 1
          },
          html: {
            type: "string",
            id: 2
          }
        }
      },
      DealType: {
        values: {
          TRADE: 0,
          NEGO: 1,
          OTC: 2
        }
      },
      Deal: {
        fields: {
          dealId: {
            type: "int64",
            id: 1
          },
          dealTime: {
            type: "DateTime",
            id: 2
          },
          instrumentId: {
            type: "int32",
            id: 3
          },
          secCode: {
            type: "string",
            id: 4
          },
          actualSin: {
            type: "string",
            id: 5
          },
          buyerId: {
            type: "int32",
            id: 6
          },
          sellerId: {
            type: "int32",
            id: 7
          },
          price: {
            type: "Decimal",
            id: 8
          },
          priceUnit: {
            type: "string",
            id: 9
          },
          dirtyPrice: {
            type: "Decimal",
            id: 10
          },
          volume: {
            type: "int64",
            id: 11
          },
          volKzt: {
            type: "Decimal",
            id: 12
          },
          volUsd: {
            type: "Decimal",
            id: 13
          },
          usdRate: {
            type: "Decimal",
            id: 14
          },
          "yield": {
            type: "Decimal",
            id: 15
          },
          stateId: {
            type: "int32",
            id: 16
          },
          dealType: {
            type: "DealType",
            id: 17
          },
          dealTypeDesc: {
            type: "string",
            id: 18
          },
          marketSector: {
            type: "MarketSector",
            id: 19
          },
          marketSectorDesc: {
            type: "string",
            id: 20
          },
          version: {
            type: "int64",
            id: 21
          },
          board: {
            type: "string",
            id: 22
          },
          currenciesId: {
            type: "int32",
            id: 23
          },
          secType: {
            type: "SecType",
            id: 24
          },
          couponInfo: {
            type: "CouponInfo",
            id: 25
          },
          priceType: {
            type: "PriceType",
            id: 26
          }
        }
      },
      DealsSortField: {
        values: {
          DSF_DEAL_TIME: 0,
          DSF_INSTRUMENT: 1,
          DSF_PRICE: 2,
          DSF_DIRTY_PRICE: 3,
          DSF_VOLUME: 4,
          DSF_VOL_KZT: 5,
          DSF_YIELD: 6,
          DSF_VERSION: 7,
          DSF_ID: 8,
          DSF_EXTID: 9
        }
      },
      ShortDealInfo: {
        fields: {
          dealId: {
            type: "int64",
            id: 1
          },
          dealTime: {
            type: "DateTime",
            id: 2
          },
          eventType: {
            type: "EventType",
            id: 3
          },
          secType: {
            type: "SecType",
            id: 4
          }
        }
      },
      DealsBaseFilter: {
        fields: {
          instrumentsFilter: {
            type: "InstrumentsFilter",
            id: 1
          },
          dealType: {
            rule: "repeated",
            type: "DealType",
            id: 2
          },
          marketSector: {
            rule: "repeated",
            type: "MarketSector",
            id: 3
          },
          versionFrom: {
            type: "int64",
            id: 4
          },
          dealsIds: {
            rule: "repeated",
            type: "int64",
            id: 5
          },
          confirmed: {
            type: "bool",
            id: 6
          }
        }
      },
      DealsFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          dealsFilter: {
            type: "DealsBaseFilter",
            id: 2
          }
        }
      },
      DealsSortRecord: {
        fields: {
          field: {
            type: "DealsSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      DealsCountRequest: {
        fields: {
          filter: {
            type: "DealsFilter",
            id: 1
          }
        }
      },
      DealsCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      DealsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "DealsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "DealsSortRecord",
            id: 4
          }
        }
      },
      DealsReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          deals: {
            rule: "repeated",
            type: "Deal",
            id: 2
          }
        }
      },
      DealsExportRequest: {
        fields: {
          filter: {
            type: "DealsFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "DealsSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      DealsExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      DealsUpdate: {
        fields: {
          deals: {
            rule: "repeated",
            type: "ShortDealInfo",
            id: 2
          }
        }
      },
      OrderType: {
        values: {
          LIMIT: 0,
          MARKET: 1,
          NEGO_ORDER: 2
        }
      },
      Order: {
        fields: {
          ordersId: {
            type: "int64",
            id: 1
          },
          orderTime: {
            type: "DateTime",
            id: 2
          },
          deltime: {
            type: "DateTime",
            id: 3
          },
          direction: {
            type: "OrderDirection",
            id: 4
          },
          status: {
            type: "OrderStatus",
            id: 5
          },
          type: {
            type: "OrderType",
            id: 6
          },
          instrumentId: {
            type: "int32",
            id: 7
          },
          instrumentCode: {
            type: "string",
            id: 8
          },
          actualSin: {
            type: "string",
            id: 9
          },
          currenciesId: {
            type: "int32",
            id: 10
          },
          price: {
            type: "Decimal",
            id: 11
          },
          dirtyPrice: {
            type: "Decimal",
            id: 12
          },
          "yield": {
            type: "Decimal",
            id: 13
          },
          volume: {
            type: "int64",
            id: 14
          },
          volrest: {
            type: "int64",
            id: 15
          },
          marketSector: {
            type: "MarketSector",
            id: 16
          },
          marketSectorDesc: {
            type: "string",
            id: 17
          },
          version: {
            type: "int64",
            id: 18
          },
          board: {
            type: "string",
            id: 19
          },
          volKzt: {
            type: "Decimal",
            id: 20
          },
          volUsd: {
            type: "Decimal",
            id: 21
          },
          secType: {
            type: "SecType",
            id: 22
          },
          couponInfo: {
            type: "CouponInfo",
            id: 23
          },
          priceType: {
            type: "PriceType",
            id: 26
          }
        }
      },
      OrdersSortField: {
        values: {
          OSF_ORDER_TIME: 0,
          OSF_INSTRUMENT: 1,
          OSF_PRICE: 2,
          OSF_DIRTY_PRICE: 3,
          OSF_VOLUME: 4,
          OSF_YIELD: 5,
          OSF_VERSION: 6,
          OSF_ID: 7,
          OSF_EXTID: 8
        }
      },
      ShortOrderInfo: {
        fields: {
          orderId: {
            type: "int64",
            id: 1
          },
          orderTime: {
            type: "DateTime",
            id: 2
          },
          eventType: {
            type: "EventType",
            id: 3
          },
          secType: {
            type: "SecType",
            id: 4
          }
        }
      },
      OrdersFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          instrumentsFilter: {
            type: "InstrumentsFilter",
            id: 2
          },
          direction: {
            rule: "repeated",
            type: "OrderDirection",
            id: 3
          },
          orderType: {
            rule: "repeated",
            type: "OrderType",
            id: 4
          },
          marketSector: {
            rule: "repeated",
            type: "MarketSector",
            id: 5
          },
          versionFrom: {
            type: "int64",
            id: 6
          },
          ordersIds: {
            rule: "repeated",
            type: "int64",
            id: 7
          }
        }
      },
      OrdersSortRecord: {
        fields: {
          field: {
            type: "OrdersSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      OrdersCountRequest: {
        fields: {
          filter: {
            type: "OrdersFilter",
            id: 1
          }
        }
      },
      OrdersCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      OrdersRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "OrdersFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "OrdersSortRecord",
            id: 4
          }
        }
      },
      OrdersReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          orders: {
            rule: "repeated",
            type: "Order",
            id: 2
          }
        }
      },
      OrdersUpdate: {
        fields: {
          orders: {
            rule: "repeated",
            type: "ShortOrderInfo",
            id: 2
          }
        }
      },
      OrdersExportRequest: {
        fields: {
          filter: {
            type: "OrdersFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "OrdersSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      OrdersExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      OrderbookRequest: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          depth: {
            type: "int32",
            id: 2
          }
        }
      },
      OrderbookReply: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          orderbook: {
            rule: "repeated",
            type: "Orderbook",
            id: 2
          },
          sessionOpened: {
            type: "bool",
            id: 3
          }
        }
      },
      OrderbookUpdate: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 2
          }
        }
      },
      SwopSelector: {
        values: {
          SS_ALL: 0,
          SS_YES: 1,
          SS_NO: 2
        }
      },
      CurDeal: {
        fields: {
          curdealId: {
            type: "int64",
            id: 1
          },
          dealTime: {
            type: "DateTime",
            id: 2
          },
          instrumentId: {
            type: "int32",
            id: 3
          },
          instrumentCode: {
            type: "string",
            id: 4
          },
          stateId: {
            type: "int32",
            id: 5
          },
          sessionId: {
            type: "int32",
            id: 6
          },
          price: {
            type: "Decimal",
            id: 7
          },
          volume: {
            type: "int64",
            id: 8
          },
          swop: {
            type: "bool",
            id: 9
          },
          openPrice: {
            type: "Decimal",
            id: 10
          },
          closePrice: {
            type: "Decimal",
            id: 11
          },
          version: {
            type: "int64",
            id: 12
          },
          board: {
            type: "string",
            id: 13
          }
        }
      },
      CurDealsSortField: {
        values: {
          CDSF_DEAL_TIME: 0,
          CDSF_INSTRUMENT: 1,
          CDSF_PRICE: 2,
          CDSF_VOLUME: 3,
          CDSF_VERSION: 4,
          CDSF_ID: 5
        }
      },
      ShortCurDealInfo: {
        fields: {
          curdealId: {
            type: "int64",
            id: 1
          },
          dealTime: {
            type: "DateTime",
            id: 2
          },
          eventType: {
            type: "EventType",
            id: 3
          }
        }
      },
      CurDealsFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          codes: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          instrumentIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          stateIds: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          sessionIds: {
            rule: "repeated",
            type: "int32",
            id: 5
          },
          swop: {
            type: "SwopSelector",
            id: 6
          },
          versionFrom: {
            type: "int64",
            id: 7
          },
          curdealsIds: {
            rule: "repeated",
            type: "int64",
            id: 8
          },
          confirmed: {
            type: "bool",
            id: 9
          }
        }
      },
      CurDealsSortRecord: {
        fields: {
          field: {
            type: "CurDealsSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      CurDealsCountRequest: {
        fields: {
          filter: {
            type: "CurDealsFilter",
            id: 1
          }
        }
      },
      CurDealsCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      CurDealsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "CurDealsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "CurDealsSortRecord",
            id: 4
          }
        }
      },
      CurDealsReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          deals: {
            rule: "repeated",
            type: "CurDeal",
            id: 2
          }
        }
      },
      CurDealsUpdate: {
        fields: {
          deals: {
            rule: "repeated",
            type: "ShortCurDealInfo",
            id: 1
          }
        }
      },
      CurDealsExportRequest: {
        fields: {
          filter: {
            type: "CurDealsFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "CurDealsSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      CurDealsExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      CurOrder: {
        fields: {
          curordersId: {
            type: "int64",
            id: 1
          },
          orderTime: {
            type: "DateTime",
            id: 2
          },
          deltime: {
            type: "DateTime",
            id: 3
          },
          direction: {
            type: "OrderDirection",
            id: 4
          },
          status: {
            type: "OrderStatus",
            id: 5
          },
          instrumentId: {
            type: "int32",
            id: 6
          },
          instrumentCode: {
            type: "string",
            id: 7
          },
          sessionId: {
            type: "int32",
            id: 8
          },
          price: {
            type: "Decimal",
            id: 9
          },
          volume: {
            type: "int64",
            id: 10
          },
          volrest: {
            type: "int64",
            id: 11
          },
          version: {
            type: "int64",
            id: 12
          },
          board: {
            type: "string",
            id: 13
          }
        }
      },
      CurOrdersSortField: {
        values: {
          COSF_ORDER_TIME: 0,
          COSF_INSTRUMENT: 1,
          COSF_PRICE: 2,
          COSF_VOLUME: 3,
          COSF_VERSION: 4,
          COSF_ID: 5,
          COSF_EXTID: 6
        }
      },
      ShortCurOrderInfo: {
        fields: {
          orderId: {
            type: "int64",
            id: 1
          },
          orderTime: {
            type: "DateTime",
            id: 2
          },
          eventType: {
            type: "EventType",
            id: 3
          }
        }
      },
      CurOrdersFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          codes: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          instrumentIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          sessionIds: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          direction: {
            rule: "repeated",
            type: "OrderDirection",
            id: 5
          },
          versionFrom: {
            type: "int64",
            id: 6
          },
          ordersIds: {
            rule: "repeated",
            type: "int64",
            id: 7
          }
        }
      },
      CurOrdersSortRecord: {
        fields: {
          field: {
            type: "CurOrdersSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      CurOrdersCountRequest: {
        fields: {
          filter: {
            type: "CurOrdersFilter",
            id: 1
          }
        }
      },
      CurOrdersCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      CurOrdersRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "CurOrdersFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "CurOrdersSortRecord",
            id: 4
          }
        }
      },
      CurOrdersReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          orders: {
            rule: "repeated",
            type: "CurOrder",
            id: 2
          }
        }
      },
      CurOrdersUpdate: {
        fields: {
          orders: {
            rule: "repeated",
            type: "ShortCurOrderInfo",
            id: 2
          }
        }
      },
      CurOrdersExportRequest: {
        fields: {
          filter: {
            type: "CurOrdersFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "CurOrdersSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      CurOrdersExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      CurOrderbookRequest: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          depth: {
            type: "int32",
            id: 2
          }
        }
      },
      CurOrderbookReply: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          orderbook: {
            rule: "repeated",
            type: "Orderbook",
            id: 2
          },
          sessionOpened: {
            type: "bool",
            id: 3
          }
        }
      },
      CurOrderbookUpdate: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 2
          }
        }
      },
      Total: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          marketSector: {
            type: "MarketSector",
            id: 2
          },
          dealType: {
            type: "DealType",
            id: 3
          },
          instrumentCode: {
            type: "string",
            id: 4
          },
          secType: {
            type: "SecType",
            id: 5
          },
          price: {
            type: "Ohlc",
            id: 6
          },
          volume: {
            type: "Ohlc",
            id: 7
          },
          kztSum: {
            type: "Decimal",
            id: 8
          },
          kztSumTrend: {
            type: "Decimal",
            id: 9
          },
          kztSumTrendPs: {
            type: "Decimal",
            id: 10
          },
          usdSum: {
            type: "Decimal",
            id: 11
          },
          prevPeriod: {
            type: "TotalsPeriod",
            id: 12
          },
          dealCount: {
            type: "int32",
            id: 13
          },
          orderCount: {
            type: "int32",
            id: 14
          },
          government: {
            type: "bool",
            id: 15
          },
          period: {
            type: "TotalsPeriod",
            id: 16
          },
          volumeSum: {
            type: "int64",
            id: 17
          },
          actualSin: {
            type: "string",
            id: 18
          }
        }
      },
      ShortTotalInfo: {
        fields: {
          period: {
            type: "Date",
            id: 1
          },
          instrumentId: {
            type: "int32",
            id: 2
          }
        }
      },
      TotalsFilter: {
        fields: {
          period: {
            type: "TotalsPeriod",
            id: 1
          },
          filter: {
            type: "DealsBaseFilter",
            id: 2
          },
          allInstruments: {
            type: "bool",
            id: 3
          }
        }
      },
      TotalsCountRequest: {
        fields: {
          filter: {
            type: "TotalsFilter",
            id: 1
          }
        }
      },
      TotalsCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      TotalsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "TotalsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          }
        }
      },
      TotalsReply: {
        fields: {
          period: {
            type: "TotalsPeriod",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          totals: {
            rule: "repeated",
            type: "Total",
            id: 3
          }
        }
      },
      TotalsUpdate: {
        fields: {
          totals: {
            rule: "repeated",
            type: "ShortTotalInfo",
            id: 1
          }
        }
      },
      QuotationsRequest: {
        fields: {
          filter: {
            type: "DealsBaseFilter",
            id: 1
          }
        }
      },
      QuotationsReply: {
        fields: {
          totals: {
            rule: "repeated",
            type: "Total",
            id: 1
          }
        }
      },
      RisersFallersRequest: {
        fields: {
          leaderType: {
            type: "LeaderType",
            id: 1
          },
          depth: {
            type: "int32",
            id: 2
          },
          secType: {
            type: "SecType",
            id: 3
          },
          government: {
            type: "GovernmentSelector",
            id: 4
          }
        }
      },
      RisersFallersReply: {
        fields: {
          leaderType: {
            type: "LeaderType",
            id: 1
          },
          secType: {
            type: "SecType",
            id: 2
          },
          government: {
            type: "GovernmentSelector",
            id: 3
          },
          totals: {
            rule: "repeated",
            type: "Total",
            id: 4
          }
        }
      },
      CurTotal: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          instrumentCode: {
            type: "string",
            id: 2
          },
          sessionId: {
            type: "int32",
            id: 3
          },
          price: {
            type: "Ohlc",
            id: 4
          },
          volume: {
            type: "Ohlc",
            id: 5
          },
          sum: {
            type: "int64",
            id: 6
          },
          sumTrend: {
            type: "int64",
            id: 7
          },
          sumTrendPs: {
            type: "Decimal",
            id: 8
          },
          kztSum: {
            type: "Decimal",
            id: 9
          },
          kztSumTrend: {
            type: "Decimal",
            id: 10
          },
          kztSumTrendPs: {
            type: "Decimal",
            id: 11
          },
          prevPeriod: {
            type: "TotalsPeriod",
            id: 12
          },
          dealCount: {
            type: "int32",
            id: 13
          },
          dealersCount: {
            type: "int32",
            id: 14
          },
          bidPrice: {
            type: "Decimal",
            id: 15
          },
          askPrice: {
            type: "Decimal",
            id: 16
          },
          usdSum: {
            type: "Decimal",
            id: 17
          },
          period: {
            type: "TotalsPeriod",
            id: 18
          }
        }
      },
      ShortCurTotalInfo: {
        fields: {
          period: {
            type: "Date",
            id: 1
          },
          instrumentId: {
            type: "int32",
            id: 2
          },
          sessionId: {
            type: "int32",
            id: 3
          }
        }
      },
      CurTotalsFilter: {
        fields: {
          period: {
            type: "TotalsPeriod",
            id: 1
          },
          codes: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          instrumentIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          sessionIds: {
            rule: "repeated",
            type: "int32",
            id: 5
          },
          allInstruments: {
            type: "bool",
            id: 6
          }
        }
      },
      CurTotalsCountRequest: {
        fields: {
          filter: {
            type: "CurTotalsFilter",
            id: 1
          }
        }
      },
      CurTotalsCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      CurTotalsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "CurTotalsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          }
        }
      },
      CurTotalsReply: {
        fields: {
          period: {
            type: "TotalsPeriod",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          totals: {
            rule: "repeated",
            type: "CurTotal",
            id: 3
          }
        }
      },
      CurQuotationsRequest: {
        fields: {
          filter: {
            type: "CurTotalsFilter",
            id: 1
          }
        }
      },
      CurQuotationsReply: {
        fields: {
          totals: {
            rule: "repeated",
            type: "CurTotal",
            id: 1
          }
        }
      },
      CurTotalsUpdate: {
        fields: {
          totals: {
            rule: "repeated",
            type: "ShortCurTotalInfo",
            id: 1
          }
        }
      },
      News: {
        fields: {
          newsId: {
            type: "int32",
            id: 1
          },
          newsTime: {
            type: "DateTime",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          },
          begTime: {
            type: "DateTime",
            id: 5
          },
          endTime: {
            type: "DateTime",
            id: 6
          },
          eventplace: {
            type: "string",
            id: 7
          },
          sourceId: {
            type: "int32",
            id: 8
          },
          comments: {
            type: "string",
            id: 9
          },
          version: {
            type: "int64",
            id: 10
          },
          selected: {
            type: "bool",
            id: 11
          }
        }
      },
      NewsBody: {
        fields: {
          newsId: {
            type: "int32",
            id: 1
          },
          body: {
            type: "string",
            id: 2
          }
        }
      },
      NewsRefs: {
        fields: {
          newsId: {
            type: "int32",
            id: 1
          },
          newssectionsIds: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          secsIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          issuersIds: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          filesIds: {
            rule: "repeated",
            type: "int32",
            id: 5
          }
        }
      },
      NewsSortField: {
        values: {
          NSF_NEWS_TIME: 0,
          NSF_TITLE: 1,
          NSF_LANG: 2,
          NSF_BEG_TIME: 3,
          NSF_END_TIME: 4,
          NSF_SOURCE_ID: 5,
          NSF_VERSION: 6,
          NSF_ID: 7
        }
      },
      ShortNewsInfo: {
        fields: {
          newsId: {
            type: "int32",
            id: 1
          },
          newsTime: {
            type: "DateTime",
            id: 2
          },
          lang: {
            type: "Language",
            id: 3
          },
          eventType: {
            type: "EventType",
            id: 4
          }
        }
      },
      File: {
        fields: {
          filesId: {
            type: "int32",
            id: 1
          },
          created: {
            type: "DateTime",
            id: 2
          },
          filetypesId: {
            type: "int32",
            id: 3
          },
          filename: {
            type: "string",
            id: 4
          },
          crc32: {
            type: "int64",
            id: 5
          },
          size: {
            type: "int32",
            id: 6
          },
          description: {
            type: "string",
            id: 7
          },
          url: {
            type: "string",
            id: 8
          }
        }
      },
      NewsFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          newssections: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          secs: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          issuers: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          lang: {
            rule: "repeated",
            type: "Language",
            id: 5
          },
          ftsCondition: {
            type: "string",
            id: 6
          },
          versionFrom: {
            type: "int64",
            id: 7
          },
          newsIds: {
            rule: "repeated",
            type: "int32",
            id: 8
          },
          onlySelected: {
            type: "bool",
            id: 9
          }
        }
      },
      NewsSortRecord: {
        fields: {
          field: {
            type: "NewsSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      NewsCountRequest: {
        fields: {
          filter: {
            type: "NewsFilter",
            id: 1
          }
        }
      },
      NewsCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      NewsRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "NewsFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "NewsSortRecord",
            id: 4
          }
        }
      },
      NewsReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          news: {
            rule: "repeated",
            type: "News",
            id: 2
          }
        }
      },
      NewsBodyRequest: {
        fields: {
          newsIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        }
      },
      NewsBodyReply: {
        fields: {
          bodies: {
            rule: "repeated",
            type: "NewsBody",
            id: 1
          }
        }
      },
      NewsRefsRequest: {
        fields: {
          newsIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        }
      },
      NewsRefsReply: {
        fields: {
          refs: {
            rule: "repeated",
            type: "NewsRefs",
            id: 1
          }
        }
      },
      NewsUsersAddRequest: {
        fields: {
          newsId: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        }
      },
      NewsUsersAddReply: {
        fields: {
          result: {
            type: "bool",
            id: 1
          }
        }
      },
      NewsUsersDeleteRequest: {
        fields: {
          newsId: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        }
      },
      NewsUsersDeleteReply: {
        fields: {
          result: {
            type: "bool",
            id: 1
          }
        }
      },
      FilesRequest: {
        fields: {
          newsId: {
            type: "int32",
            id: 1
          },
          filesIds: {
            rule: "repeated",
            type: "int32",
            id: 2
          }
        }
      },
      FilesReply: {
        fields: {
          files: {
            rule: "repeated",
            type: "File",
            id: 1
          }
        }
      },
      FileBodyRequest: {
        oneofs: {
          partialLoad: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filesId: {
            type: "int32",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          }
        }
      },
      FileBody: {
        fields: {
          file: {
            type: "File",
            id: 1
          },
          body: {
            type: "bytes",
            id: 2
          }
        }
      },
      FileBodyReply: {
        fields: {
          file: {
            type: "File",
            id: 1
          },
          body: {
            type: "bytes",
            id: 2
          },
          range: {
            type: "Range",
            id: 3
          }
        }
      },
      NewsUpdate: {
        fields: {
          news: {
            rule: "repeated",
            type: "ShortNewsInfo",
            id: 2
          }
        }
      },
      FullNewsInfo: {
        fields: {
          news: {
            type: "News",
            id: 1
          },
          body: {
            type: "string",
            id: 2
          },
          files: {
            rule: "repeated",
            type: "FileBody",
            id: 3
          }
        }
      },
      FullNewsInfoRequest: {
        fields: {
          filter: {
            type: "NewsFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "NewsSortRecord",
            id: 2
          }
        }
      },
      FullNewsInfoReply: {
        fields: {
          news: {
            rule: "repeated",
            type: "FullNewsInfo",
            id: 2
          }
        }
      },
      GraphRequest: {
        fields: {
          securityId: {
            type: "int32",
            id: 1
          },
          period: {
            type: "TotalsPeriod",
            id: 2
          },
          needEmptyIntervals: {
            type: "bool",
            id: 3
          }
        }
      },
      GraphReply: {
        fields: {
          securityId: {
            type: "int32",
            id: 1
          },
          period: {
            type: "TotalsPeriod",
            id: 2
          },
          interval: {
            type: "GraphIntervalType",
            id: 3
          },
          ohlc: {
            rule: "repeated",
            type: "GraphOhlc",
            id: 4
          }
        }
      },
      HeatmapType: {
        values: {
          HT_INDEX_KASE: 0,
          HT_KASE_GLOBAL: 1
        }
      },
      HeatmapDepth: {
        values: {
          HD_DAY: 0,
          HD_MONTH: 1,
          HD_QUARTER: 2,
          HD_YEAR: 3
        }
      },
      HeatmapRecord: {
        fields: {
          securityId: {
            type: "int32",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          capitalization: {
            type: "Decimal",
            id: 3
          },
          trend: {
            type: "Decimal",
            id: 4
          },
          lastPrice: {
            type: "Decimal",
            id: 5
          },
          lastTime: {
            type: "DateTime",
            id: 6
          }
        }
      },
      HeatmapRequest: {
        fields: {
          type: {
            type: "HeatmapType",
            id: 1
          },
          depth: {
            type: "HeatmapDepth",
            id: 2
          }
        }
      },
      HeatmapReply: {
        fields: {
          type: {
            type: "HeatmapType",
            id: 1
          },
          records: {
            rule: "repeated",
            type: "HeatmapRecord",
            id: 2
          }
        }
      },
      CurGraphRequest: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          period: {
            type: "TotalsPeriod",
            id: 2
          },
          needEmptyIntervals: {
            type: "bool",
            id: 3
          }
        }
      },
      CurGraphReply: {
        fields: {
          securityId: {
            type: "int32",
            id: 1
          },
          period: {
            type: "TotalsPeriod",
            id: 2
          },
          interval: {
            type: "GraphIntervalType",
            id: 3
          },
          ohlc: {
            rule: "repeated",
            type: "GraphOhlc",
            id: 4
          }
        }
      },
      Repo: {
        fields: {
          repoId: {
            type: "int32",
            id: 1
          },
          openTime: {
            type: "DateTime",
            id: 2
          },
          closeTime: {
            type: "DateTime",
            id: 3
          },
          prolongDate: {
            type: "Date",
            id: 4
          },
          kredDays: {
            type: "int32",
            id: 5
          },
          secId: {
            type: "int32",
            id: 6
          },
          secCode: {
            type: "string",
            id: 7
          },
          autorepo: {
            type: "bool",
            id: 8
          },
          autoId: {
            type: "int32",
            id: 9
          },
          autoCode: {
            type: "string",
            id: 10
          },
          openPrice: {
            type: "Decimal",
            id: 11
          },
          closePrice: {
            type: "Decimal",
            id: 12
          },
          volume: {
            type: "int64",
            id: 13
          },
          openVolKzt: {
            type: "Decimal",
            id: 14
          },
          openVolUsd: {
            type: "Decimal",
            id: 15
          },
          closeVolKzt: {
            type: "Decimal",
            id: 16
          },
          closeVolUsd: {
            type: "Decimal",
            id: 17
          },
          "yield": {
            type: "Decimal",
            id: 18
          },
          version: {
            type: "int64",
            id: 19
          },
          board: {
            type: "string",
            id: 20
          },
          nonKase: {
            type: "bool",
            id: 21
          },
          secType: {
            type: "SecType",
            id: 22
          },
          priceType: {
            type: "PriceType",
            id: 23
          },
          actualSin: {
            type: "string",
            id: 24
          }
        }
      },
      RepoSortField: {
        values: {
          RSF_OPEN_TIME: 0,
          RSF_CLOSE_TIME: 1,
          RSF_PROLONG_DATE: 2,
          RSF_KRED_DAYS: 3,
          RSF_SEC_CODE: 4,
          RSF_AUTO_CODE: 5,
          RSF_OPEN_PRICE: 6,
          RSF_CLOSE_PRICE: 7,
          RSF_VOLUME: 8,
          RSF_OPEN_VOL_KZT: 9,
          RSF_OPEN_VOL_USD: 10,
          RSF_CLOSE_VOL_KZT: 11,
          RSF_CLOSE_VOL_USD: 12,
          RSF_YIELD: 13,
          RSF_VERSION: 14,
          RSF_ID: 15,
          RSF_EXTID: 16
        }
      },
      ShortRepoInfo: {
        fields: {
          repoId: {
            type: "int32",
            id: 1
          },
          openTime: {
            type: "DateTime",
            id: 2
          },
          closeTime: {
            type: "DateTime",
            id: 3
          },
          eventType: {
            type: "EventType",
            id: 4
          }
        }
      },
      RepoFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          instrumentsFilter: {
            type: "InstrumentsFilter",
            id: 2
          },
          versionFrom: {
            type: "int64",
            id: 3
          },
          repoIds: {
            rule: "repeated",
            type: "int64",
            id: 4
          }
        }
      },
      RepoSortRecord: {
        fields: {
          field: {
            type: "RepoSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      RepoCountRequest: {
        fields: {
          filter: {
            type: "RepoFilter",
            id: 1
          }
        }
      },
      RepoCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      RepoRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "RepoFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "RepoSortRecord",
            id: 4
          }
        }
      },
      RepoReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          deals: {
            rule: "repeated",
            type: "Repo",
            id: 2
          }
        }
      },
      RepoUpdate: {
        fields: {
          deals: {
            rule: "repeated",
            type: "ShortRepoInfo",
            id: 2
          }
        }
      },
      RepoExportRequest: {
        fields: {
          filter: {
            type: "RepoFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "RepoSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      RepoExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      RepoOrder: {
        fields: {
          repoordersId: {
            type: "int64",
            id: 1
          },
          serial: {
            type: "int64",
            id: 2
          },
          orderTime: {
            type: "DateTime",
            id: 3
          },
          deltime: {
            type: "DateTime",
            id: 4
          },
          direction: {
            type: "OrderDirection",
            id: 5
          },
          status: {
            type: "OrderStatus",
            id: 6
          },
          instrumentId: {
            type: "int32",
            id: 7
          },
          instrumentCode: {
            type: "string",
            id: 8
          },
          actualSin: {
            type: "string",
            id: 9
          },
          currenciesId: {
            type: "int32",
            id: 10
          },
          price: {
            type: "Decimal",
            id: 11
          },
          "yield": {
            type: "Decimal",
            id: 12
          },
          volume: {
            type: "int64",
            id: 13
          },
          volrest: {
            type: "int64",
            id: 14
          },
          version: {
            type: "int64",
            id: 15
          },
          board: {
            type: "string",
            id: 16
          },
          volKzt: {
            type: "Decimal",
            id: 17
          },
          volUsd: {
            type: "Decimal",
            id: 18
          },
          volcontr: {
            type: "Decimal",
            id: 19
          },
          secType: {
            type: "SecType",
            id: 20
          }
        }
      },
      RepoOrdersSortField: {
        values: {
          ROSF_ORDER_TIME: 0,
          ROSF_INSTRUMENT: 1,
          ROSF_PRICE: 2,
          ROSF_VOLUME: 4,
          ROSF_YIELD: 5,
          ROSF_VERSION: 6,
          ROSF_ID: 7,
          ROSF_EXTID: 8
        }
      },
      ShortRepoOrderInfo: {
        fields: {
          repoorderId: {
            type: "int64",
            id: 1
          },
          orderTime: {
            type: "DateTime",
            id: 2
          },
          eventType: {
            type: "EventType",
            id: 3
          }
        }
      },
      RepoOrdersFilter: {
        fields: {
          period: {
            type: "DatePeriod",
            id: 1
          },
          codes: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          instrumentIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          direction: {
            rule: "repeated",
            type: "OrderDirection",
            id: 4
          },
          versionFrom: {
            type: "int64",
            id: 5
          },
          repoordersIds: {
            rule: "repeated",
            type: "int64",
            id: 6
          }
        }
      },
      RepoOrdersSortRecord: {
        fields: {
          field: {
            type: "RepoOrdersSortField",
            id: 1
          },
          desc: {
            type: "bool",
            id: 2
          }
        }
      },
      RepoOrdersCountRequest: {
        fields: {
          filter: {
            type: "RepoOrdersFilter",
            id: 1
          }
        }
      },
      RepoOrdersCountReply: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      RepoOrdersRequest: {
        oneofs: {
          records: {
            oneof: [
              "range",
              "bandle"
            ]
          }
        },
        fields: {
          filter: {
            type: "RepoOrdersFilter",
            id: 1
          },
          range: {
            type: "Range",
            id: 2
          },
          bandle: {
            type: "int32",
            id: 3
          },
          sorting: {
            rule: "repeated",
            type: "RepoOrdersSortRecord",
            id: 4
          }
        }
      },
      RepoOrdersReply: {
        fields: {
          range: {
            type: "Range",
            id: 1
          },
          repoorders: {
            rule: "repeated",
            type: "RepoOrder",
            id: 2
          }
        }
      },
      RepoOrdersUpdate: {
        fields: {
          repoorders: {
            rule: "repeated",
            type: "ShortRepoOrderInfo",
            id: 1
          }
        }
      },
      RepoOrdersExportRequest: {
        fields: {
          filter: {
            type: "RepoOrdersFilter",
            id: 1
          },
          sorting: {
            rule: "repeated",
            type: "RepoOrdersSortRecord",
            id: 2
          },
          format: {
            type: "ExportFileFormat",
            id: 3
          },
          lang: {
            type: "Language",
            id: 4
          }
        }
      },
      RepoOrdersExportReply: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      WatchlistInstrumentType: {
        values: {
          WIT_SECURITIES: 0,
          WIT_CURRENCIES: 1,
          WIT_INDICATORS: 2
        }
      },
      WatchlistInstrument: {
        fields: {
          instrumentId: {
            type: "int32",
            id: 1
          },
          type: {
            type: "WatchlistInstrumentType",
            id: 2
          },
          code: {
            type: "string",
            id: 3
          }
        }
      },
      WatchlistSearchRequest: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          lang: {
            type: "Language",
            id: 2
          }
        }
      },
      WatchlistSearchReply: {
        fields: {
          instruments: {
            rule: "repeated",
            type: "WatchlistInstrument",
            id: 1
          }
        }
      },
      WatchlistAddRequest: {
        fields: {
          instruments: {
            rule: "repeated",
            type: "WatchlistInstrument",
            id: 1
          }
        }
      },
      WatchlistAddReply: {
        fields: {
          ok: {
            type: "bool",
            id: 1
          }
        }
      },
      WatchlistDelRequest: {
        fields: {
          instruments: {
            rule: "repeated",
            type: "WatchlistInstrument",
            id: 1
          }
        }
      },
      WatchlistDelReply: {
        fields: {
          ok: {
            type: "bool",
            id: 1
          }
        }
      },
      WatchlistRequest: {
        fields: {
          types: {
            rule: "repeated",
            type: "WatchlistInstrumentType",
            id: 1
          }
        }
      },
      WatchlistReply: {
        fields: {
          secQuotes: {
            rule: "repeated",
            type: "Total",
            id: 1
          },
          curQuotes: {
            rule: "repeated",
            type: "CurTotal",
            id: 2
          },
          indQuotes: {
            rule: "repeated",
            type: "Indicator",
            id: 3
          }
        }
      },
      WatchlistUpdate: {
        fields: {
          userNames: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      User: {
        fields: {
          firstname: {
            type: "string",
            id: 1
          },
          lastname: {
            type: "string",
            id: 2
          },
          middlename: {
            type: "string",
            id: 3
          },
          email: {
            type: "string",
            id: 4
          },
          userName: {
            type: "string",
            id: 5
          },
          password: {
            type: "string",
            id: 6
          },
          tel: {
            type: "string",
            id: 7
          },
          address: {
            type: "string",
            id: 8
          },
          comments: {
            type: "string",
            id: 9
          }
        }
      },
      UserRegRequest: {
        fields: {
          user: {
            type: "User",
            id: 1
          },
          lang: {
            type: "Language",
            id: 2
          },
          guid: {
            type: "string",
            id: 3
          },
          reCaptcha: {
            type: "string",
            id: 4
          }
        }
      },
      RegError: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          }
        }
      },
      UserRegReply: {
        fields: {
          ok: {
            type: "bool",
            id: 1
          },
          messages: {
            rule: "repeated",
            type: "RegError",
            id: 2
          }
        }
      },
      ResetPwdRequest: {
        fields: {
          lang: {
            type: "Language",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          }
        }
      },
      ResetPwdReply: {
        fields: {
          ok: {
            type: "bool",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
